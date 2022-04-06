//Following handy tutorial from : https://www.sitepoint.com/using-redis-node-js/

//add where you wish to use the code
import {PrismaClient} from '@prisma/client';
import internal = require('stream');

class TokenAuthenticate 
{
    prisma = new PrismaClient();

    /**
     * 
     * @param username 
     * @param password 
     * @returns 
     */
    setNewUser(username : string, password : string)
    {
         return username;
    }

    /**
     * 
     * @param username 
     * @returns 
     */
    getPassword(username : string)
    {
        return username;
    }


    /**
     * 
     * @param username 
     * @param newPassword 
     * @returns 
     */
    setPassword(username  : string, newPassword :string)
    {
        return username;
    }

    /**
     * 
     * @param username 
     * @param token 
     * @param time 
     * @param token_type 
     * @returns 
     */
    setToken(username : string, token : string, time : internal, token_type : number)
    {
        return username;
    }

    /**
     * 
     * @param username 
     * @returns 
     */
    getToken(username : string)
    {
        return username;
    }

    /**
     * 
     * @param username 
     * @param time 
     * @returns 
     */
    setTokenExpiration(username : string, time : number)
    {
        return username;
    }

    /**
     * 
     * @param username 
     * @param token_type 
     * @returns 
     */
    getTokenExpiration(username : string, token_type : number)
    {
        return username;
    }

    /**
     * 
     * @param username 
     * @param token_type 
     * @returns 
     */
    setTokenType(username : string, token_type : number)
    {
        return username;
    }

    /**
     * 
     * @param username 
     * @returns 
     */
    getTokenType(username : string)
    {
        return username;
    }
}

