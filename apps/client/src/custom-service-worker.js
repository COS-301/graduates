/* eslint-disable no-undef */
importScripts('./ngsw-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
//import the sha256 library
importScripts('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha256.js');

importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js');

//variables//
var DBName= 'GraphQL-Cache';
var OBJStore= 'PostResponses';


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
      response: "function to be implemented",
      timestamp: Date.now()
    };
    idbKeyval.set(id, entry, store);
  }


  