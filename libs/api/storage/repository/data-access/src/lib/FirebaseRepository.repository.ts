import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes, uploadString} from 'firebase/storage';
import * as fs from 'fs';


/*Since Firebase is only a temporary solution I tried making the storage as simple as 
possible each feature's storage will be stored in the same bucket only under a 
different folder. Please see below. The firebaseConfig is currently connected to one 
personal firebase projects will be updated accordingly later on. If you require external
storage please contact me (Larisa (Storage Data Engineer) - 082 796 0342) I will simply add a folder to the firebase
bucket and add a upload function then you can use this repository within your feature's service.t
to manage and organise your own files*/

//The type of file getting uploaded
export enum FirebaseFolders{
  Files = 'Files',
  DatabaseDumps = 'DatabaseDumps',
  Videos = 'Videos',
  ProfilePhotos = 'ProfilePhotos',
  BlogMedia = 'BlogMedia'
}

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

  async uploadFile(file: File | Blob, fileName: string, folder: FirebaseFolders): Promise<boolean>{
    const fileRef = ref(this.storage, folder + '/' + fileName);

    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Successful upload');
      console.log(snapshot);
      return true;
    });

    console.error('Something went wrong during upload to firebase');
    return false;
  }

  async uploadAsBase64String(base64: string, fileName: string, folderName: FirebaseFolders) : Promise<boolean>{

    const fileRef = ref(this.storage, folderName + '/' + fileName);

    uploadString(fileRef, base64, 'base64').then((snapshot) => {
      console.log('Successful upload');
      console.log(snapshot);
      return true;
    });

    console.error('Something went wrong during upload to firebase');
    return false;
  }

  async uploadAsBinaryString(binaryFile: string, fileName: string, folderName: FirebaseFolders) : Promise<boolean>{

    const fileRef = ref(this.storage, folderName + '/' + fileName);

    //convert binary string to base64 encoding
    const temp = Buffer.from(binaryFile, 'binary').toString('base64');

    uploadString(fileRef, temp, 'base64').then((snapshot) => {
      console.log('Successful upload');
      console.log(snapshot);
      return true;
    });

    console.error('Something went wrong during upload to firebase');
    return false;
  }

  /*NOTE THAT IF THE FILE IS NOT UPLOADED AS BASE64 STRING IT DOESN't DOWNLOAD THE FILE DIRECTLY 
  ONLY DISPLAYS IT WHEN THE URL IS FOLLOWED, I DO NOT KNOW HOW CRITICAL THIS IS*/
  async getURLByName(fileName:string, folder:FirebaseFolders): Promise<string| null>{

    //create a reference to a file or a directory
    const fileRef = ref(this.storage, folder + '/'+ fileName);

    //const fileRef = ref(this.storage, 'IMG_0127.JPG');
    //const fileRef = ref(this.storage, 'file-folder');

    // This is analogous to a file path on disk
    console.log(fileRef.fullPath);

    //get the url that will download the file
    getDownloadURL(fileRef)
      .then((url) => {
        console.log(url); 
        return url;
      })
      .catch((error) => {
        console.error(error);
      });

    return null;
  }

  async getURLByFilePath(file_path:string) : Promise<string|null>{
    
    //create a reference to a file or a directory
    const fileRef = ref(this.storage, file_path);

    //const fileRef = ref(this.storage, 'IMG_0127.JPG');
    //const fileRef = ref(this.storage, 'file-folder');

    // This is analogous to a file path on disk
    console.log(fileRef.fullPath);

    //get the url that will download the file
    getDownloadURL(fileRef)
      .then((url) => {
        console.log(url); 
        return url;
      })
      .catch((error) => {
        console.error(error);
      });

    return null;
  }

  async deleteByFilename(filename:string, folder:FirebaseFolders):Promise<boolean>{

    // Create a reference to the file to delete
    const desertRef = ref(this.storage, folder+'/'+filename );

    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log('Successfully deleted');
      return true;
    }).catch((error) => {
      console.error(error);
      return false;
    });

    return false;
  }

  //file_path = FirebaseFolder/filename
  async deleteByFilePath(file_path:string):Promise<boolean>{

    // Create a reference to the file to delete
    const desertRef = ref(this.storage, file_path );

    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log('Successfully deleted');
      return true;
    }).catch((error) => {
      console.log(error);
      return false;
    });

    return false;
  }
  
  //ex. FirebaseRepository.uploadAllUnderDirectory('@graduates/api/storage/uploads',FirebaseRepository.FirebaseFolders.Files)
  //ex. FirebaseRepository.uploadAllUnderDirectory('@graduates/api/stories/videos',FirebaseRepository.FirebaseFolders.Videos)
  async uploadAllUnderDirectory(dirname:string, folder:FirebaseFolders) : Promise<boolean> {

     //access the directory provided and get all the filenames
     fs.readdir(dirname, function (err, filenames) {
      if (err) {
        console.log(err);
        return false;
      }

      //access each file in directory via filename
      filenames.forEach( (filename) => {
        fs.readFile(dirname + '/' + filename, 'base64',  (err, data) => {
          if (err) {
            console.error(err);
            return false;
          }

          //get a reference inside firebase on where to upload the files
          const fileRef = ref(getStorage(), folder + '/' + filename);

          //upload the file in base64 string encryption
          uploadString(fileRef, data, 'base64').then((snapshot) => {
            console.log('Successful upload');
            console.log(snapshot);
          });

          //clear directory
          try {
            fs.unlinkSync(dirname + '/' + filename)
          } catch(err) {
            console.error(err)
            return false;
          }

        });
      });
    });

    return true;
  }
}