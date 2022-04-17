import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType({ description: 'company representative profile' })
export class CompanyRepresentativeFailedResponse {
 @Field()
 response!: string
}