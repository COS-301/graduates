import { Injectable } from "@nestjs/common";

Injectable()
export class UpdateRepresentative{

    constructor(public id:string, public newData:string,public type:string){}
}