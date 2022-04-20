import { Resolver, Query, Args } from '@nestjs/graphql';
import { ApiAuthorization } from '@graduates/api/authorization/api/shared';
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';
import { NotFoundException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

@Resolver(() => ApiAuthorization)
export class ApiAuthorizationResolver {
  constructor(private authourizationService: ApiAuthorizationService) {}

  @Query((returns) => ApiAuthorization)
  async authorization(@Args('id') id: string) {
  
    
    const authorizationObj = new ApiAuthorization();
    if((await this.authourizationService.GetRoleQueryPermissions(id))!= null)
    {
      authorizationObj.userRole = (await this.authourizationService.GetRoleQueryPermissions(id)) ;
    }
    else
    {
      authorizationObj.userRole = "null";
    }

    if((await this.authourizationService.GetCompanyId(id))!= null)
    {
      authorizationObj.companyId = (await this.authourizationService.GetCompanyId(id));
    }
    else
    {
      authorizationObj.companyId = "null";
    }

    if((await this.authourizationService.GetViewPermidssions(id))!= null)
    {
      authorizationObj.accessPermission = (await this.authourizationService.GetViewPermidssions(id)).accessPermission;
    }
    else
    {
      authorizationObj.accessPermission = false;
    }

    if((await this.authourizationService.GetEditPermidssions(id))!= null)
    {
      authorizationObj.editPermission = (await this.authourizationService.GetEditPermidssions(id)).editPermission;
    }
    else
    {
      authorizationObj.editPermission =false;
    }

    if((await this.authourizationService.GetDeletePermidssions(id))!= null)
    {
      authorizationObj.deletePermission = (await this.authourizationService.GetDeletePermidssions(id)).deletePermission;
    }
    else
    {
      authorizationObj.deletePermission = false;
    }


    return authorizationObj;

  }
  
  @Query(() => String)
  pingAuthorization(){
    return "on";
  }
}
