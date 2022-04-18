import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Short } from './api-shorts-entity.entity';

@ObjectType()
export class ShortReport {
  /**
   * The id of the short that the report belongs to
   */
  @Field()
  shortId!: string;

  /**
   * The id of the user who created the report
   */
  @Field()
  userId!: string;

  /**
   * The reason why the user created the report
   */
  @Field()
  reason!: string;

  /**
   * The user who created the report
   */
  @Field(() => User)
  user!: User;

  /**
   * The short that the report belongs to
   */
  @Field(() => Short)
  short!: Short;
}

@InputType()
export class ShortReportInput {
  /**
   * The id of the short that the report belongs to
   */
  @Field()
  shortId!: string;

  /**
   * The reason why the user created the report
   */
  @Field()
  reason!: string;
}
