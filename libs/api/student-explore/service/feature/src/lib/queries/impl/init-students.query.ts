import { Injectable } from "@nestjs/common";

@Injectable()
export class InitStudentsQuery {
	constructor(readonly Input) { }
}