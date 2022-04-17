//Following handy tutorial from : https://www.sitepoint.com/using-redis-node-js/

//add where you wish to use the code
import {PrismaClient} from '@prisma/client';
import { Role } from '@prisma/client';

export class AuthenticationRepository
{
    prisma = new PrismaClient();
    bcrypt = require('bcrypt');

    /**
     * 
     * @param password users password
     * @param email users email
     * @param created if user is created
     * @param suspended if user is suspended
     * @param validated if user is validated
     * @returns completion status
     * @description creates a user in the user relation
     */
    async createUser(password:string, email:string, created, suspended:boolean, validated:boolean)
    {
        if(!password)
            throw Error("password");
        if(!email)
            throw Error("email");
        if(created == null)
            throw Error("created");
        if(suspended == null)
            throw Error("suspended");
        if(validated == null)
            throw Error("validated");

        const salt = await this.bcrypt.genSalt(6);
        const hashed = await this.bcrypt.hash(password, salt)
        await this.prisma.user.create({
            data:
            {
                email: email,
                password: hashed,
                passwordSalt: salt,
                created: created,
                suspended: suspended,
                validated: validated
            }
        });

        return "user_created";
    }

    /**
     * 
     * @param userId user whose password should be verified
     * @param password to validate
     * @returns 
     */
    async verifyPassword(userId:string, password:string)
    {
        const salt = await this.bcrypt.genSalt(6);
        const hashed = await this.bcrypt.hash(password, salt);        
        const user = await this.prisma.user.findFirst({
            where:
            {
                id : userId
            },
            select :
            {
                password:true
            }
        });
        const response:boolean = this.bcrypt.compare(hashed, user.password);

        if(response)
            return true;
        else
            return false;
    }

    /**
     * 
     * @param userId user whose role we should create
     * @param role of user to be created
     * @returns completion status
     */
    async createRole(userId:string, role:Role)
    {
        await this.prisma.userRole.create({
            data:
            {
                userId : userId,
                role : role
            }
        });

        return "user_role_created";
    }

    /**
     * 
     * @param userId user whose role we should create
     * @param email of user to be created
     * @returns 
     */
    async createEmail(userId:string, email:string)
    {
        await this.prisma.userEmail.create({
            data:
            {
                userId : userId,
                email : email
            }
        });

        return "user_email_created";
    }

    /**
     * 
     * @param email used to get id for token model
     * @param token to be stored in model
     * @param token_type type of token, google or auth
     * @param token_expiration date token will expire
     * @returns success or throws failure
     * @description Creates a token for the user in our database
     */
    async setToken(email : string, token : string, token_type : number, token_expiration : number)
    {
        if(!email)
            throw Error("email");
        else if(!token)
            throw Error("token");
        else if(token_type == null || token_type < 0 || token_type > 3)
            throw Error("token_type");
        else if(!token_expiration)
            throw Error("token_expiration");

        const id = await this.getIdFromEmail(email); 
        
        if(!id)
            throw Error("user_does_not_exist");

        if(!this.getToken(email))
            throw Error("user_already_has_token");

        await this.prisma.userToken.create({
            data:
            {
                userId : id,
                userToken: token,
                userTokenType: token_type,
                userTokenExpiration: token_expiration
            }
        })

        return "user_token_created";
    }

    /**
     * 
     * @param email used to get id for token model
     * @returns a users token
     */
    async getTokenOnly(email : string)
    {
        const id = await this.getIdFromEmail(email); 
        
        if(!id)
            throw Error("user_does_not_exist");
        
        return await this.prisma.userToken.findFirst({
            where:
            {
                userId: id
            },
            select:
            {
                userToken: true
            }
        });
    }

    async getToken(email : string)
    {
        const id = await this.getIdFromEmail(email); 
        
        if(!id)
            throw Error("user_does_not_exist");
        
        return await this.prisma.userToken.findFirst({
            where:
            {
                userId: id
            }
        });
    }

    /**
     * 
     * @param email used to get id for token model
     * @param time to set token expiration to
     * @returns completion status
     */
    async setTokenExpiration(email : string, time : number)
    {
        const id = await this.getIdFromEmail(email);

        if(!id)
            throw Error("user_does_not_exist");

        await this.prisma.userToken.update({
            where:
            {
                userId:id
            },
            data:
            {
                userTokenExpiration: time
            }
        });

        return "user_token_expiration_set";
    }

    /**
     * 
     * @param email used to get id for token model
     * @returns token expiration date of user attached to email
     */
    async getTokenExpiration(email : string)
    {
        const id = await this.getIdFromEmail(email);

        if(!id)
            throw Error("user_does_not_exist");

        return await this.prisma.userToken.findFirst({
            where:{
                userId:id
            },
            select:
            {
                userTokenExpiration: true
            }
        })        
    }

    /**
     * 
     * @param email used to get id for token model
     * @param token_type set the token type
     */
    async setTokenType(email : string, token_type : number)
    {
        const id = await this.getIdFromEmail(email);

        if(!id)
            throw Error("user_does_not_exist");

        await this.prisma.userToken.update({
            where:
            {
                userId : id
            },
            data:
            {
                userTokenType: token_type
            }
        })

        return "user_token_type_set";
    }

    /**
     * 
     * @param email 
     * @returns returns the token type of the user
     */
    async getTokenType(email : string)
    {
        const id = await this.getIdFromEmail(email);

        if(!id)
            throw Error("user_does_not_exist");
            
        return await this.prisma.userToken.findFirst({
            where:
            {
                userId: id
            },
            select:
            {
                userTokenType: true
            }
        })       
    }

    /**
     * 
     * @param id used to get role
     * @returns the role from the user id
     */
    async getEmailFromId(id: string)
    {
        const email = await this.prisma.user.findFirst({
            where:
            {
                id :id
            }
        });

        if(email)
            return email.email;
        else
            return null;
    }

    /**
     * 
     * @param id used to get role 
     * @returns a users role
     */
    async getRoleFromId(id: string)
    {
        const role = await this.prisma.userRole.findFirst({
            where:
            {
                userId :id
            }
        });

        if(role)
            return role.role;
        else
            return null;
    }

    /**
     * 
     * @param email used to get id
     * @returns a users id from their email address
     */
    async getIdFromEmail(email: string)
    {
        const id = await this.prisma.userEmail.findFirst({
            where:
            {
                email: email
            }
        });

        if(id)
            return id.userId;
        else
            return null;
    }
}

