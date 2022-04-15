import { Prisma } from "@prisma/client";
import { PermissionCategory, PermissionTenant, PermissionType, Role, SocialMedia } from "@prisma/client";
export class CreateCompanyRepresentative
{
    public readonly role=Role.REPRESENTATIVE;
    public readonly permissionType=PermissionType.ALL;
    public readonly permissionCategory=PermissionCategory.ALL;
    public readonly permissionTenant=PermissionTenant.ALL;

    public profilePicture:string;

    //profile picture to be implemented later

    setProfilePicture(picture:string)
    {
        this.profilePicture=picture;
    }

    getProfilePicture():string
    {
        return this.profilePicture;
    }

    constructor(

        //e.g of date format: 2018-12-10 13:45:00.000
        
        public readonly id:string,
        public readonly email:string,
        public readonly password:string,
        public readonly passwordSalt:string,
        public readonly name:string,
        public readonly dateOfBirth:string,
        public readonly companyId:string,
        public readonly created:string,
        public readonly suspended:boolean,
        public readonly validated:boolean,
        
        public readonly userScout:Prisma.UserCreateNestedOneWithoutUserScoutedInput,
        public readonly date:string,      
        public readonly number:string,
        public readonly experience:string,
        public readonly type:SocialMedia,
        public readonly link:string,

        public readonly bio:string
        
        
    ){}  
}