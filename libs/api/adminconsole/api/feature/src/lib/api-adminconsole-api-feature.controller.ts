import { Controller } from '@nestjs/common';

@Controller('api-adminconsole-api-feature')
export class ApiAdminconsoleApiFeatureController {}


//export function to be tested in the testing file
export function add(x: number,y: number): number{
    return x+y;
}

//export entire class
export class Testing{
    userName: string;
    id: number;
    course: string;
    done: boolean;

    constructor(userName:string,id:number,course:string,done:boolean){
        this.userName=userName;
        this.id=id;
        this.course=course;
        this.done=done;
    }
   
    getuserName(){
        return this.userName;
    }

    getid(){
        return this.id;
    }

    getcourse(){
        return this.course;
    }

    isdone(){
        return this.done;
    }
}

export function uri():string{
    return "http://www.google.com:443/";
}

export function name():string{
    return "Joshua--Testing--example";
}

export function array():number[]{
    const arr:number[] = [1,2,3,4];  
    return arr;

}

export function fetchexample():string{
    return "example";
}