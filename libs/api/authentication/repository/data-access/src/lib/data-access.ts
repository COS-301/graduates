//Following handy tutorial from : https://www.sitepoint.com/using-redis-node-js/

//add where you wish to use the code
import jwt from "jsonwebtoken";
import {PrismaClient} from '@prisma/client';

class TokenAuthenticate 
{
    prisma = new PrismaClient();
    jwt = new jwt();

    //const redis = require("redis");
    //For safety we will need to change port and host in redis const client = redis.createClient(port, host); in the form "127.0.0.1" host "6379"

    /**
     * 
     * REDIS DATBASE WILL CONTAIN USERNAME, TOKEN, TOKEN EXPIRATION
     */



    /**
     * @param username users username
     * @param password users password
     * @returns JWT formatted return token for client side storage
     * @description Main function to authenticate a user
     */
    authenticate(username: string, password: string): JSON {
        //TODO: Password Hashing Algorithm
        //TODO: Verify Against Main DB
        //TODO: Add user to redis DB with auth token
        //TODO: Return JWT Token
        let JWTToken: JSON;
        return JWTToken;

    }

    /**
     * 
     * @param gAuth takes in the JSON result from the google auth 
     * @description Sets up 
     */
    googleAuthenticate(gAuth: JSON) {
        const username: string = gAuth["user"]["firstName"];
        const token: string = gAuth["user"]["accessTokens"];
        const tokenExpiration: Date = this.getDate(7);
        const returner = this.client.hSet(username, { 'token_details': { 'token': token, 'token_expiration': tokenExpiration } });
        return returner;
    }

    /**
     * 
     * @param token new token
     * @param username user to change the token of
     * @returns updated JWT token
     * @description Called by authenticate. Take in verified username and assigns this user a token. The user, 
     *              token and expiration date of the token are then stored in our redis database. 
     */
    setToken(token: string, username: string) {
        //TODO: create token to set username to
        const signed = this.jwt.sign({ data: token }, "TESTPRIVATEKEY", { algorithm: 'RS256' });
        return signed;
    }

    /**
     *  
     * @param username user name to find token
     * @returns token expiration time
     */
    getTokenExpiration(username: string) {
        //TODO: get time until token expires with redis
        let expirationTime: JSON;
        return expirationTime;
    }

    /**
     * 
     * @param username user name to be used as key to set token time to current time
     */

    requestTokenReset(username: string) {
        //TODO: set time of username to current time so next authorization request returns false and requires user to resin in 
    }

    getDate(days: number) {
        const date: Date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }

    /**
     * 
     * @returns current time as int
     */
    getDateNow() {
        //TODO: implement time function
        const date: Date = new Date;
        return date;
    }



    /*

    Proposed JWT token in the form

    {
        "username" : username,
        "token_value" : token,
        "user_id" : userId   
    }

    */
}

