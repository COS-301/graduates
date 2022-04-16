import { Injectable } from '@nestjs/common';
import { ApiAuthorization} from '@graduates/api/authorization/api/shared'
import { type } from 'os';
@Injectable()
export class ApiAuthorizationService {

    async findOneById(id:string): Promise<ApiAuthorization>
    {
    
        const data={
            userRole: "Student", 
            companyId: "220432083", 
            accessPermission : true,
            editPermission : true,
            deletePermission: false,
        };
        return data;
    }

}
