import { 
    Query, 
    Resolver, 
    Args,
} from "@nestjs/graphql";
import { ApiUpIntegrationService} from '@graduates/api/upintegration/service/feature'
import { 
    StudentDetails, 
    AcademicRecord, 
    Degree 
} from '@graduates/api/upintegration/api/shared/data-access'

@Resolver(() => StudentDetails)
export class ApiUpIntegrationResolver {
   constructor(
       private Service:ApiUpIntegrationService,
    ){}

    /**
     * API call to get the student details
     * Reimplement or expand for future years, when acces to UP API is aquired
     * @param studentNum student number of the relevant student
     * @returns Student details aquired from the database
     */
    @Query(()=>StudentDetails)
    async getStudentDetailsUP(
        @Args('studentNum') studentNum: string
    ):Promise<StudentDetails>{
        const details = new StudentDetails();
        details.studentNumber = studentNum;
        const id = await this.Service.get_ID(studentNum);
        details.userID = id;
        if (id=="User was not found"){
            details.name = null;
            details.surname =  null; 
            details.course = null;
            details.contactNumber = null;
            details.email = null;
            return details;
        }
        const fullname = await this.Service.get_name(id);
        const names = fullname.split(" ");
        details.name = names[0];
        details.surname =  names[1]; 
        details.course = await this.Service.get_Degree(id);
        details.contactNumber = await this.Service.get_PhoneNumber(id);
        details.email = await this.Service.get_email(id);
        return details;
    }

    /**
     * API call to get the Academic Record
     * Reimplement or expand for future years, when acces to UP API is aquired
     * @returns Academic record entity that is a stub
     */
    @Query(()=>AcademicRecord)
    async getAcademicRecord():Promise<AcademicRecord>{
        const details = new AcademicRecord();        
        details.fileAsString = "stub for future use, use the Storage api for retrieving and uploading academic records to the database"

        return details;
    }

    /**
     * API call to get the Degree
     * Reimplement or expand for future years, when acces to UP API is aquired
     * @returns Degree entity that is a stub
     */
    @Query(()=>Degree)
    async getDegree():Promise<Degree>{
        const details = new Degree();        
        details.fileAsString = "stub for future use, use the Storage api for retrieving and uploading degree to the database"

        return details;
    }

    @Query(() =>String) 
    pingUpintegration(){
        return "on";
    }
} 