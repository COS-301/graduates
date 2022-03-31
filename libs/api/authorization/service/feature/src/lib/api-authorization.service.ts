import { Injectable } from '@nestjs/common';
import { ApiAuthorization} from '@graduates/api/authorization/api/shared'
@Injectable()
export class ApiAuthorizationService {

    async findOneById(id:string): Promise<ApiAuthorization>
    {
        const data={
            id:id,
            permissionType:'edit',
            userName: "KC Chivunga",
            userType: "student",
            isPermittedTo: true,
        };
        return data;
    }

}
