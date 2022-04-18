import { CompanyRepresentative } from "@graduates/api/company-representative/api/shared/data-access";
import { Injectable } from "@nestjs/common";

Injectable()
export class UpdateRepresentative{

    constructor(public representative: CompanyRepresentative){}
}