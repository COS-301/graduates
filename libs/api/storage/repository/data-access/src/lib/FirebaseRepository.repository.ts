import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import * as fs from 'fs';

/*Since Firebase is only a temporary solution I tried making the storage as simple as 
possible each feature's storage will be stored in the same bucket only under a 
different folder. Please see below. The firebaseConfig is currently connected to one 
personal firebase projects will be updated accordingly later on. If you require external
storage please contact me (Larisa-082 796 0342) I will simply add a folder to the firebase
bucket and add a upload function then you can use this class to manage and organise your 
own files*/


@Injectable()
export class FirebaseService {
  firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MSF_SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID",
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

  async uploadAllUnderUploads(){
    const dir = '@graduates/api/storage/uploads';
    const files = fs.readdirSync(dir);

    for(const file of files)
    {
      console.log("here");
      console.log(file);
    }
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