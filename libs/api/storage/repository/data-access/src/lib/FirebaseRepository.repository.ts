import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';

/* Since Firebase is only a temporary solution I tried making the storage as simple as 
possible each feature's storage will be stored in the same bucket only under a 
different folder. Please see below. The firebaseConfig is currently connected to one 
personal firebase projects will be updated accordingly later on. If you require external
storage please contact me (Larisa-082 796 0342) I will simply add a folder to the firebase
bucket and add a upload function then you can use this class to manage and organise your 
own files*/


@Injectable()
export class FirebaseService {
  firebaseConfig = {
    apiKey: 'AIzaSyD7fH_aHqly7Z7jiyPT-H_gc1J807BTkZQ',
    authDomain: 'practice-23667.firebaseapp.com',
    databaseURL: 'https://practice-23667-default-rtdb.firebaseio.com',
    projectId: 'practice-23667',
    storageBucket: 'practice-23667.appspot.com',
    messagingSenderId: '180246940109',
    appId: '1:180246940109:web:9ab1846b487e40e32f1c84',
    measurementId: 'G-GC7N8G15QC',
  };

  app = initializeApp(this.firebaseConfig);
  //analytics = getAnalytics(this.app);
  storage = getStorage();

  async uploadFile(file: File){
    const fileRef = ref(this.storage, 'Files');

    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot);
    });
  }

  async uploadVideo(file: File){
    const fileRef = ref(this.storage, 'Videos');

    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot);
    });
  }

  async uploadDump(file: File){
    const fileRef = ref(this.storage, 'DatabaseDumps');

    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot);
    });
  }

  async getFileURLByName(fileName:string): Promise<string| null>{
    //create a reference to a file or a directory
    const fileRef = ref(this.storage,"Files/"+fileName);
    //const fileRef = ref(this.storage, 'IMG_0127.JPG');
    //const fileRef = ref(this.storage, 'file-folder');

    // This is analogous to a file path on disk
    console.log(fileRef.fullPath);

    // This is analogous to the file name
    console.log(fileRef.name);

    getDownloadURL(fileRef)
      .then((url) => {
        console.log(url); 
        return url;
      })
      .catch((error) => {
        console.log(error);
      });

    return null;
  }
}