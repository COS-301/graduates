import { PermissionCategory, PermissionTenant, PermissionType, Prisma, Role, SocialMedia } from "@prisma/client";

export class CreateCompanyRepresentative
{
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
        public readonly userIdScout:string,
        public readonly date:string,
        public readonly role:Role,
        public readonly permissionType:PermissionType,
        public readonly permissionCategory:PermissionCategory,
        public readonly permissionTenant:PermissionTenant,
        public readonly number:string,
        public readonly experience:string,
        public readonly type:SocialMedia,
        public readonly link:string
        ){}  
}