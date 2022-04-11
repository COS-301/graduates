import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { ShortTag } from './ApiShortsTagEntity.entity';
import { ShortReport } from './ApiShortsReportEntity.entity';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Short {
  @Field(() => ID)
  id!: string;

  @Field()
  userId!: string;

  @Field({ nullable: true })
  media!: string;

  @Field({ nullable: true })
  data!: string;

  @Field(() => Date)
  datePosted!: Date;

  @Field(() => Boolean)
  archived!: boolean;

  @Field(() => User)
  user!: User;

  @Field(() => [ShortTag])
  shortTag!: ShortTag[];

  @Field(() => [ShortReport])
  shortReport!: ShortReport[];
}

@InputType()
export class ShortCreateInput {
  @Field({ nullable: true })
  media!: string;

  @Field({ nullable: true })
  data!: string;

  @Field(() => Boolean)
  archived!: boolean;
}
