
/**
 * Team: Javascript
 * @version 1.0.0
 * @details Graphql is used throughout the whole website -as specified by the Project Owners
 *          in the Technology specifications- to retrieve and handle API calls required by 
 *          the various web pages. Graphql makes use of the 'POST' method in its request line.
 *          This property conflicts with the capabilities of the angular service worker as the ngsw 
 *          was designed to only handle 'GET' requests. As the PWA Team one of our functional
 *          requirements is to ensure the offline capabilities of website.
 * 
 * //Solution//     
 * @details A secondary service worker is required to handle the chaing of 'POST' requests.
 *          IndexedDB is a proposed solution in this regard. IndexedDB allows for the caching
 *          of whole responses as JSON objects regardless of the parameters. 
 *            
 *  
 * @todo: open a database (indexedDB)
 *        *create and then open the database if it doesn't exist.
 *        *create an objectstore (this will behave like a collection in the database)
 *        *in order to start operations on the database, transactions need to be created on the objectstore
 *        *IndexedDB operations are asynchronous (account for that in the function calls)
 * 
 * @todo: listen for 'POST' requests from /graphql(/)? and then insert the response from the request into the 
 *        indexedDB
 *        
 *        
 * @details Specs: Offline requirements
 *             -ngsw cannot handle 'POST' requests
 *             - A secondary service worker was created to handle POST requests specifically from '/graphql(/)?'
 *             - An indexedDB database is used to store the POST request responses
 *                 * using the original process for indexedDB gave us a lot of problems so we used a library instead
 * 
 * @fn staleWhileRevalidate()
 * @fn serResp()
 * @fn insertIndexedDB()
 * @fn getPostKey()
 * @fn getCachedIndexedDB()
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
/** 
 *  @brief Function to implement the StaleWhileRevalidate caching strategy
 *  @details This implementation handles caching of POST requests by implementing the StaleWhileRevalidate strategy
 *  @pre   the event must be a post request 
 *  @param {Object} event - the api call to be handled 
 *  @var   {Object} cacheDBfield - The cached response for the request
 *  @var   {Object} getPromise - the promise for the async function
 *  @result {Object} the promise for the async function
 */
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
/** 
   * @brief An asynchronous function that takes in a response from IndexedDB and serilaizes the headers received
   * @param {Object} response - JSON Object containing field data
   * @var {Array} seriHeaders - An array of headers
   * @var {Object} serialized - JSON Object of serialized headers
   * @returns {Object} JSON Object of serialized headers
  */
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
/**
 * @brief Function stores and hashes the responses of the POST requests
 * @param {Object} request 
 * @param {Object} response 
 * @var {Object} body
 * @var {Object} entry
 * @return Void 
 */
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
/** 
 * @brief retrieves the responses of the POST requests from IndexDB and checks if the cache is expired.
 * @param {Object} request 
 * @var {Object} cacheddata
 * @var {String} id
 * @var {Object} body
 * @var {Object} cacheControl
 * @var {Number} cacheTime 
 * @returns POST requests stored in IndexDB or null if the cache is expired or if it fails to fetch from IndexDB
 */ 
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