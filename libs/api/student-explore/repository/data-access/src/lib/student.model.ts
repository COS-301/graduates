import { AggregateRoot } from '@nestjs/cqrs';

import { Field, ID, ObjectType } from '@nestjs/graphql';

/*@ObjectType()
export class Student extends AggregateRoot{
    /*constructor(
        public readonly name: string,
        public readonly studentNumber: string,
    ){
        super();
    }
}*/

@ObjectType()
export class Student {
  @Field(() => ID)
  StudentNumber: string;
}