/* eslint-disable no-undef */
/**
 * Team: Javascript
 * @todo: open a database (indexedDB)
 *          *create and then open the database if it doesn't exist.
 *        create an objectstore (this will behave like a collection in the database)
 *        
 *        IndexedDB operations are asynchronous (account for that in the function calls)
 *        
 *        
 * Specs: Offline requirements
 *      -ngsw cannot handle 'POST' requests
 *      - A secondary service worker was created to handle POST requests specifically from '/graphql(/)?'
 *      - An indexedDB database is used to store the POST request responses
 *          * using the original process for indexedDB gave us a lot of problems so we used a library instead
 * 
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
//import the sha256 library
importScripts('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha256.js');

importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js');

//variables//
var DBName= 'GraphQL-Cache';
var OBJStore= 'PostResponses';
var Regex='/graphql(/)?';

//idbKeyval from an external library, doesn't give issues and is less tedious
const store = new idbKeyval.Store(DBName, OBJStore);

workbox.routing.registerRoute(
  new RegExp(Regex),
 
  async ({event}) => {return staleWhileRevalidate(event);},'POST'
);

self.addEventListener('fetch', async (event) => {

  console.log(event.request.clone());
  if (event.request.method === 'POST') {
    event.respondWith(staleWhileRevalidate(event));
  }

});

importScripts('./ngsw-worker.js');

const staleWhileRevalidate = async (event) => {

  let cacheDBfield= await getCachedIndexedDB(event.request.clone());
  
  let getPromise = fetch(event.request.clone())
    .then((response) => {
      insertIndexedDB(event.request.clone(), response.clone());
      return response;
    })
    .catch((err) => {
      console.error(err);
    });

  if (cacheDBfield) {
    return Promise.resolve(cacheDBfield);
  } else {
    return getPromise;
  }
}

const serResp = async (response) => {

  let seriHeaders = {};
  for (var entry of response.headers.entries()) {
    seriHeaders[entry[0]] = entry[1];
  }
  let serialized = {
    headers: seriHeaders,
    status: response.status,
    statusText: response.statusText
  };

  serialized.body = await response.json();
  return serialized;
}

const insertIndexedDB = async (request, response) => {
  let body = await request.json();
  let id = CryptoJS.SHA256(body.query).toString();

  var entry = {
    query: body.query,
    response: await serResp(response),
    timestamp: Date.now()
  };
  idbKeyval.set(id, entry, store);
}

const getCachedIndexedDB = async (request) => { 
  let cacheddata;
  try {
    let body = await request.json();

    let id = CryptoJS.SHA256(body.query).toString();

    cacheddata = await idbKeyval.get(id, store);
    if (!cacheddata) return null;

    let cacheControl = request.headers.get('Cache-Control');

    let cacheTime = 0;
    
    if (cacheControl) {
      cacheTime=parseInt(cacheControl.split('=')[1]);
    } else {
      cacheTime=5000;
    }

    if (Date.now() - cacheddata.timestamp > cacheTime * 1000) {
    
      return null;
    }

    return new Response(JSON.stringify(cacheddata.response.body), cacheddata.response);
  } catch (err) {

    return null;
  }
}

const getPostKey = async (request) => {
  let body = await request.json();
  return JSON.stringify(body);
}