import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes, uploadString} from 'firebase/storage';
import * as fs from 'fs';

//The type of file getting uploaded
export enum FirebaseFolders{
  Files = 'Files',
  DatabaseDumps = 'DatabaseDumps',
  Videos = 'Videos',
  ProfilePhotos = 'ProfilePhotos',
  BlogMedia = 'BlogMedia',
  Thumbnails = 'Thumbnails'
}

@Injectable()
export class FirebaseService {
  firebaseConfig = {

    apiKey: process.env.API_KEY,

    projectId: process.env.PROJECT_ID,

    storageBucket: process.env.STORAGE_BUCKET,

    messagingSenderId: process.env.MSG_SENDER_ID,

    appId: process.env.APP_ID,

    measurementId: process.env.MEASUREMENT_ID,
  };

  app = initializeApp(this.firebaseConfig);
  //analytics = getAnalytics(this.app);
  storage = getStorage();

  async uploadFile(file: File | Blob, fileName: string, folder: FirebaseFolders): Promise<boolean>{
    
    const fileRef = ref(this.storage, folder + '/' + fileName);

    let tempBool = false;

    //add new file to firebase storage
    await uploadBytes(fileRef, file).then( async (snapshot) => {
      console.log('Successful upload');
      console.log(snapshot);
      tempBool = true;
    }).catch( (err) =>{
      console.error(err);
    });

    return tempBool;
  }

  async uploadAsBase64String(base64: string, fileName: string, folderName: FirebaseFolders) : Promise<boolean>{

    const fileRef = ref(this.storage, folderName + '/' + fileName);

    let tempBool = false;

    //add new file to firebase storage
    await uploadString(fileRef, base64, 'base64').then( async (snapshot) => {
      console.log('Successful upload');
      console.log(snapshot);
      tempBool = true;
    }).catch( (err) =>{
      console.error(err);
    });

    return tempBool;
  }

  async uploadAsBinaryString(binaryFile: string, fileName: string, folderName: FirebaseFolders) : Promise<boolean>{

    const fileRef = ref(this.storage, folderName + '/' + fileName);

    //convert binary string to base64 encoding
    const tempString = Buffer.from(binaryFile, 'binary').toString('base64');

    let tempBool = false;

    //add new file to firebase storage
    await uploadString(fileRef, tempString, 'base64').then( async (snapshot) => {
      console.log('Successful upload');
      console.log(snapshot);
      tempBool = true;
    }).catch( (err) =>{
      console.error(err);
    });

    return tempBool;
  }

  async getURLByName(fileName:string, folder:FirebaseFolders): Promise<string| null>{

    //create a reference to a file or a directory
    const fileRef = ref(this.storage, folder + '/'+ fileName);

    //const fileRef = ref(this.storage, 'IMG_0127.JPG');
    //const fileRef = ref(this.storage, 'file-folder');

    // This is analogous to a file path on disk
    console.log(fileRef.fullPath);

    let url = null;

    //get the url that will download the file
    await getDownloadURL(fileRef)
      .then(async(value) => {
        url = value;
      })
      .catch((error) => {
        console.error(error);
      });

    return url;
  }

  async getURLByFilePath(file_path:string) : Promise<string|null>{
    
    //create a reference to a file or a directory
    const fileRef = ref(this.storage, file_path);

    //const fileRef = ref(this.storage, 'IMG_0127.JPG');
    //const fileRef = ref(this.storage, 'file-folder');

    // This is analogous to a file path on disk
    console.log(fileRef.fullPath);

    let url = null;

    //get the url that will download the file
    await getDownloadURL(fileRef)
      .then( async (value) => {
        url = value;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });

    return url;
  }

  async deleteByFilename(filename:string, folder:FirebaseFolders):Promise<boolean>{

    // Create a reference to the file to delete
    const desertRef = ref(this.storage, folder+'/'+filename );

    let tempBool = false;
    // Delete the file
    await deleteObject(desertRef).then(async () => {
      console.log('Successfully deleted');
      tempBool = true;
    }).catch((error) => {
      console.error(error);
      tempBool = false;
    });

    return tempBool;
  }

  //file_path = FirebaseFolder/filename
  async deleteByFilePath(file_path:string):Promise<boolean>{

    // Create a reference to the file to delete
    const desertRef = ref(this.storage, file_path );

    let tempBool = false;

    // Delete the file
    await deleteObject(desertRef).then(async () => {
      console.log('Successfully deleted');
      tempBool = true;
    }).catch((error) => {
      console.log(error);
      tempBool = false;
    });

    return tempBool;
  }
  
  //ex. FirebaseRepository.uploadAllUnderDirectory('@graduates/api/storage/uploads',FirebaseRepository.FirebaseFolders.Files)
  //ex. FirebaseRepository.uploadAllUnderDirectory('@graduates/api/stories/videos',FirebaseRepository.FirebaseFolders.Videos)
  async uploadAllUnderDirectory(dirname:string, folder:FirebaseFolders) : Promise<boolean> {

     let tempBool = false;
     //access the directory provided and get all the filenames
     fs.readdir(dirname, function (err, filenames) {
      if (err) 
        console.log(err);
      //access each file in directory via filename
      filenames.forEach( async (filename) => {
        fs.readFile(dirname + '/' + filename, 'base64', async (err, data) => {
          if (err) 
            console.error(err);

            //get a reference inside firebase on where to upload the files
            const fileRef = ref(getStorage(), folder + '/' + filename);

            //upload the file in base64 string encryption
            await uploadString(fileRef, data, 'base64').then(async (snapshot) => {
              console.log('Successful upload');
              console.log(snapshot);
              tempBool = true;
            });

            //clear directory
            try {
              fs.unlinkSync(dirname + '/' + filename);
            } catch (err) {
              console.log('Failed to clear directory!');
              console.error(err);
            }
        });
      });
    });

    return tempBool;
  }
}