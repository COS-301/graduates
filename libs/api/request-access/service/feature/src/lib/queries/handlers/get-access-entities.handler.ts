import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
//import { UserRepository } from '@graduates/api/example/repository/data-access';
import { GetAccessEntitiesQuery } from '../impl/get-access-entities.query';

@QueryHandler(GetAccessEntitiesQuery)
export class GetAccessEntitiesHandler implements IQueryHandler<GetAccessEntitiesQuery> {
  //constructor(private readonly repository: UserRepository) {}

  async execute(query: GetAccessEntitiesQuery) {
	const {companyID, userID, itemID} = query;
    //return this.repository.getAccessEntities(companyID, userID, itemID);
    const entity = {
        companyID: companyID,
        userID: userID,
        item: itemID,
      };
  
      return entity;
  }
}