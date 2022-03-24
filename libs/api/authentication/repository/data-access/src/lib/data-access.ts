//Following handy tutorial from : https://www.sitepoint.com/using-redis-node-js/

const redis = require('redis');
//For safety we will need to change port and host in redis const client = redis.createClient(port, host); in the form "127.0.0.1" host "6379"
const client = redis.createClient();

/**
 * @param username users username
 * @param password users password
 * @returns JWT formatted return token for client side storage
 * @description Main function to authenticate a user
 */
function authenticate(username, password)
{
    //TODO: Password Hashing Algorithm
    //TODO: Verify Against Main DB
    //TODO: Add user to redis DB with auth token
    //TODO: Return JWT Token
    let JWTToken;
    return JWTToken;
}

/**
 * 
 * @param token new token
 * @param username user to change the token of
 * @returns updated JWT token
 * @description Called by authenticate. Take in verified username and assigns this user a token. The user, 
 *              token and expiration date of the token are then stored in our redis database. 
 */
function setToken(token, username)
{
    //TODO: create token to set username to
    let JWTToken;
    return JWTToken;
}

/**
 *  
 * @param username user name to find token
 * @returns token expiration time
 */
function getTokenExpiration(username)
{
    //TODO: get time until token expires with redis
    let expirationTime;
    return expirationTime;
}

/**
 * 
 * @param username user name to be used as key to set token time to current time
 */

function requestTokenReset(username)
{
    //TODO: set time of username to current time so next authorization request returns false and requires user to resin in 
}

/**
 * 
 * @returns current time as int
 */
function getTimeNow()
{
    //TODO: implement time function
    let currentTime;
    return currentTime;
}

/*

Proposed JWT token in the form

{
    "username" : username,
    "token_value" : token,
    "user_id" : userId   
}

*/