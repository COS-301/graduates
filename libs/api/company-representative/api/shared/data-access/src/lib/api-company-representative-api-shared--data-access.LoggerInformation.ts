import { ObjectType, Field, ID, InputType} from '@nestjs/graphql';

@InputType({ description: 'logger information' })
export class LoggerInformation {
  @Field()
  email!: string

  @Field()
  password!: string;
}