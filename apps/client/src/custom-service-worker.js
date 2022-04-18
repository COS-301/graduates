/* eslint-disable no-undef */


importScripts('./ngsw-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
//import the sha256 library
importScripts('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha256.js');

importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js');

//variables//
var DBName= 'GraphQL-Cache';
var OBJStore= 'PostResponses';






const serResp = async (response) => {
  console.log("DEBUG8:in serial response");

  let seriHeaders = {};
  for (var entry of response.headers.entries()) {
    //new data will be entered at the top 
    seriHeaders[entry[0]] = entry[1];
  }
  let serialized = {
    headers: seriHeaders,
    status: response.status,
    statusText: response.statusText
  };
  console.log("DEBUG9:get serial response in json");

  serialized.body = await response.json();
  return serialized;
}

/*
  var DB=null;
  var OBJ=null;
  const objName="graphql_post"
   openDB()
  setIndexedDB()
  
  function openDB(){
  var graphqlDB = indexedDB.open('Graphql-Cache',1);
  
  graphqlDB.onerror=(error)=>{
    console.error("Theres an error");
  }
  graphqlDB.onupgradeneeded= ()=>
  {
   OBJ =this.result.createObjectStore('grapghql_post', {
      autoIncrement:  true, keyPath: 'id' });
  }
  graphqlDB.onsuccess = () =>{    
    DB = graphqlDB.result;
    console.log("opened db successfully")
  }
  }
  // db opens successfully 
*/
//idbKeyval from an external library, doesn't give issues and is less tedious

const store = new idbKeyval.Store(DBName, OBJStore);

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
    //insert the code
      return null;
  }
  
  const getPostKey = async (request) => {
    let body = await request.json();
    return JSON.stringify(body);
  }