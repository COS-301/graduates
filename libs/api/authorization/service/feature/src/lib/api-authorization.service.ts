import { Injectable } from '@nestjs/common';
import { ApiAuthorization} from '@graduates/api/authorization/api/shared'
@Injectable()
export class ApiAuthorizationService {

    async findOneById(id:string): Promise<ApiAuthorization>
    {
        

        const data={
            userRole: "Student",  
            permissions:[true,true,true],

        };
        return data;
    }

}
