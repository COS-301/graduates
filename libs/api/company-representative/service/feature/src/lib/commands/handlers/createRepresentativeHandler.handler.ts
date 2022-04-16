import { CommandHandler,ICommandHandler } from "@nestjs/cqrs";
import { CreateCompanyRepresentative } from "../impl/createRepresentative.command";
import { Prisma, prisma, Role, User } from "@prisma/client";
import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { create } from "domain";

@CommandHandler(CreateCompanyRepresentative)
export class CreateCompanyRepresentativeHandler implements ICommandHandler<CreateCompanyRepresentative>
{
    //inject dataAccess here
    constructor(private readonly prismaService:PrismaService){}

    async execute(command: CreateCompanyRepresentative): Promise<User|null> {
        

        /*
        //let user: Prisma.UserCreateInput

        const user={
            id:command.id,
            email:command.email,
            suspended:command.suspended,
            created:command.created,
            validated:command.validated
        }

        
      
        return this.prismaService.user.create({ data: user })*/

        let user:Prisma.UserCreateInput;

        // eslint-disable-next-line prefer-const
        user={
            id:command.id,
            email:command.email,
            password:command.password,
            passwordSalt:command.passwordSalt,
            name:command.name,
            dateOfBirth:command.dateOfBirth,
            created:command.created,
            suspended:command.suspended,
            validated:command.validated,

            /**
             * There is something wrong with this schema. Let's not use it!
             */
            userScouted:{
                create:[
                    {
                        userScout:command.userScout,
                        userIdScout:command.id,
                        date:command.date
                    }
                ]
            },

            UserRole:{
                create:[
                    {
                        role:command.role,
                    }
                ]
            },

            UserPermissions:{
                create:[
                    {
                        permissionType:command.permissionType,
                        permissionCategory:command.permissionCategory,
                        permissionTenant:command.permissionTenant
                    }
                ]
            },

            UserProfile:{
                create:[
                    {
                        profilePicture:command.getProfilePicture(),
                        bio:command.bio
                    }
                ]
            },

            UserContactNumber:{
                create:[
                    {
                        number:command.number
                    }
                ]
            },

            UserExperience:{
                create:[
                    {
                        experience:command.experience
                    }
                ]
            },

            UserSocialMedia:{
                create:[
                    {
                        type:command.type,
                        link:command.link
                    }
                ]
            }

          
        }

        
        return this.prismaService.user.create({data:user});
       
    }
}