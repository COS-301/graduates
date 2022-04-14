//Following handy tutorial from : https://www.sitepoint.com/using-redis-node-js/

//add where you wish to use the code
import {PrismaClient} from '@prisma/client';

export class AuthenticationRepository
{
    prisma = new PrismaClient();
    bcrypt = require('bcrypt');

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
    }

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

        return "Created";
    }

    /**
     * 
     * @param email used to get id for token model
     * @returns a users token
     */
    async getToken(email : string)
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

    /**
     * 
     * @param email used to get id for token model
     * @param time to set token expiration to
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
                userTokenExpiration: token_type
            }
        })
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
        const id = await this.prisma.user.findFirst({
            where:
            {
                email: email
            }
        });

        if(id)
            return id.id;
        else
            return null;
    }
}

