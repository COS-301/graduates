export class SendMailEvent {
    constructor(
        public readonly emailFrom:string,
        public readonly emailTo:string,
        public readonly emailSubject:string,
        public readonly emailText:string){
    }
}