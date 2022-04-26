import { apiStorageRepositoryDataAccess } from './api-storage-repository-data-access';

describe('apiStorageRepositoryDataAccess', () => {
  it('should work', () => {
    expect(apiStorageRepositoryDataAccess()).toEqual(
      'api-storage-repository-data-access'
    );
  });
});


const the_record={file:"simp",filename:"JohnsCV",folder:"uploads",base64:"qwdre'fe",
file_path:"graduates/api/storage/uploads,FirebaseRepository.FirebaseFolder",
file_path1:"FirebaseFolder/JohnsCV",
dirname:"@graduates/api/stories/videos',FirebaseRepository.FirebaseFolders"}
const arr: any [] = [
  { "id": 4, "links": ["http:/uploads/u123/CV","http:/uploads/u124/CV","http:/uploads/u125/Typescript"], },
  { "id": 6, "links":  ["http:/uploads/u125/Typescript","http:/uploads/u127/CV","http:/uploads/u128/CV"], },
  { "id": 8, "links":  ["http:/uploads/u128/CV","http:/uploads/u1210/Typscript","http:/uploads/u1211/Typescript"] }
];

export class StorageRepositoryMock {
  deleteByFilename(filename: string, folder: string) {
    if(filename.match(the_record.filename)&&folder.match(the_record.folder)){
      return 1 ;
    }
    else{
      return 0;
    }
  }
  deleteByFilePath(file_path:string) {
    if(file_path.match(the_record.file_path1)){
      return 1 ;
    }
    else{
      return 0;
    }
  }
  uploadAllUnderDirectory(dirname:string, folder:string)
  {
    if(dirname.match(the_record.dirname)&&folder.match(the_record.folder)){
      return "Successful upload";
    }else
   {
      return "Something went wrong during upload to firebase";
    }
  }
  getURLByName(filename: string, folder: string) {
    if(filename.match(the_record.filename)){
      return "http:/"+folder+"/"+ filename;
    }
    else{
      return "File Name not found";
    }
  }
  getURLByFilePath(file_path: string) {
    if(file_path.match(the_record.file_path)){
      //get the url that will download the file
      return "http:/"+"graduates/api/storage/uploads,FirebaseRepository.FirebaseFolder";
    }
    else{
      return "File Path not found";
    }
  }
  uploadFile( fileName: string, folder: string){
    if(folder.match(the_record.folder))
    {
      return "Successful upload";
    }else
    {
      return "Something went wrong during upload to firebase";
    }
  }


  uploadAsBase64String(base64: string, fileName: string, folderName: string)
  {
      if(base64.match(the_record.base64)&&folderName.match(the_record.folder))
      {
        const temp = Buffer.from(the_record.base64, 'binary').toString('base64');
        if(temp !=the_record.base64)
            return "Successful upload";
       return "Something went wrong during encoding";
      }
      else
      {
          return "Something went wrong during upload to firebase";
      }
  }

  getUserFiles(u_id: string)
  {
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].id==u_id)
      {
        return arr[i].links;
      }
    }

    return "user has no files"
  }

  getUserFile(u_id: string,file_type:string){
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].id==u_id)
      {
        for(let ii=0;ii<arr[i].links.length;ii++)
        {
          if(arr[i].links[ii].includes(file_type))
          {
            return arr[i].links[ii];
          }

        }
      }
    }

    return "user does not have that specific file"

  }
}

const repositorymock=new StorageRepositoryMock();

describe( 'Repository data access', () => {

  describe('Upload File Test', () => {
    it('should get Successful upload', async () => {

         const thestring = repositorymock.uploadFile("JohnsCV","uploads")
         const matchstring = "Successful upload";
         expect(thestring).toMatch(matchstring);

    });
  });

  describe('Upload File Test', () => {
    it('should return something went wrong during upload', async () => {

         const thestring = repositorymock.uploadFile("JohnsCV","downolads")
         const matchstring = "Something went wrong during upload to firebase";
         expect(thestring).toMatch(matchstring);

    });
  });

  describe('Upload File as Base64', () => {
    it('convert binary string to base64 encoding', async () => {

         const thestring = repositorymock.uploadAsBase64String("qwdre'fe","JohnsCV","uploads")
         const matchstring = "Successful upload";
         expect(thestring).toMatch(matchstring);

    });
  });

  describe('Upload File as Base64', () => {
    it('should return something went wrong during upload, due to wrong encoding', async () => {

         const thestring = repositorymock.uploadAsBase64String("qwdre'f","JohnsCV","uploads")
         const matchstring = "Something went wrong during upload to firebase";
         expect(thestring).toMatch(matchstring);

    });
  });

  // NOTE THAT IF THE FILE IS NOT UPLOADED AS BASE64 STRING IT DOESN't DOWNLOAD THE FILE DIRECTLY
  describe('Get URL By Name', () => {
    it('should return the URL', async () => {

      const expectedUrl = "http:/uploads/JohnsCV";
      const url =  repositorymock.getURLByName("JohnsCV","uploads")
      expect(url).toEqual(expectedUrl);

    });
  });

  describe('Get URL By File Path', () => {
    it('should return File path URL', async () => {

      const expectedUrl = "http:/"+"graduates/api/storage/uploads,FirebaseRepository.FirebaseFolder";
      const url =  repositorymock.getURLByFilePath("graduates/api/storage/uploads,FirebaseRepository.FirebaseFolder")
      expect(url).toEqual(expectedUrl);

    });
  });

  describe('Get URL By File Path', () => {
    it('should return File Path not found,due to wrong path', async () => {

      const expectedUrl = "File Path not found";
      const url =  repositorymock.getURLByFilePath("graduates/api/storage/")
      expect(url).toEqual(expectedUrl);

    });
  });

  describe('Delete by file name', () => {
    it('should return 1', async () => {

      const expectedVal = 1;
      const val =  repositorymock.deleteByFilename("JohnsCV","uploads")
      expect(val).toEqual(expectedVal);

    });
  });

  describe('Delete by file name', () => {
    it('should return 0,File does not excist', async () => {

      const expectedVal = 0;
      const val =  repositorymock.deleteByFilename("JoysCV","uploads")
      expect(val).toEqual(expectedVal);

    });
  });

  //file_path = FirebaseFolder/filename
  describe('Delete by file path', () => {
    it('should return 1', async () => {

      const expectedVal = 1;
      const val =  repositorymock.deleteByFilePath("FirebaseFolder/JohnsCV")
      expect(val).toEqual(expectedVal);

    });
  });

  describe('Delete by file path', () => {
    it('should return 0, due to wrong path', async () => {

      const expectedVal = 0;
      const val =  repositorymock.deleteByFilePath("download/JohnsCV")
      expect(val).toEqual(expectedVal);

    });
  });

  describe('upload All Under Directory', () => {
    it('should get Successful upload', async () => {

         const thestring = repositorymock.uploadAllUnderDirectory("@graduates/api/stories/videos',FirebaseRepository.FirebaseFolders","uploads")
         const matchstring = "Successful upload";
         expect(thestring).toMatch(matchstring);

    });
  });

  describe('upload All Under Directory', () => {
    it('should return Something went wrong ,due to wrong directory', async () => {

         const thestring = repositorymock.uploadAllUnderDirectory("@graduates/api/stories/videos',FirebaseRepository","uploads")
         const matchstring ="Something went wrong during upload to firebase";
         expect(thestring).toMatch(matchstring);

    });
  });

  describe('get User Files', () => {
    it('should return an array of links to all the users files', async () => {

         const thearr = repositorymock.getUserFiles("8")
         const matchstring =arr[2].links;
         expect(thearr).toEqual(matchstring);

    });
  });

  describe('get User Files', () => {
    it('should return user has no files"', async () => {

         const thearr = repositorymock.getUserFiles("5")
         const matchstring ="user has no files";
         expect(thearr).toMatch(matchstring);

    });
  });


  //get a link to a specific user file

  describe('get a link to a specific user file', () => {
    it('should return a specific user file"', async () => {

         const url = repositorymock.getUserFile("8","Typscript")
         const matchstring ="http:/uploads/u1210/Typscript";
         expect(url).toMatch(matchstring);

    });
  });

  describe('get a link to a specific user file', () => {
    it('should return user does not have that specific file"', async () => {

         const url = repositorymock.getUserFile("8","Academic Record")
         const matchstring ="user does not have that specific file";
         expect(url).toMatch(matchstring);

    });
  });




});


