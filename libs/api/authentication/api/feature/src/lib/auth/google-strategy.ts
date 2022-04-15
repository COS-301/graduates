// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy, VerifyCallback } from 'passport-google-oauth20';
// import { Injectable } from "@nestjs/common";

// @Injectable()

// export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
//     constructor(){
//         super({
//             clientID: '',
//             clientSecret: "",
//             callbackURL: "",
//             scope: ""
//         });
//     }
// async validate(accessToken: string, refreshToken:string, profile:any, done: VerifyCallback):
// Promise<any>{
//     const {name, emails, photos} = profile
//     const user = {
//         email: emails[0].value,
//         name: name.givenName,
//         picture: photos[0].value,
//         accessToken
//     }
//     done(null, user)
// }

// }