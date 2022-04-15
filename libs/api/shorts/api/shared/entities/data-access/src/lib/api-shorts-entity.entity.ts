import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { ShortTag, ShortTagInput } from './api-shorts-tag-entity.entity';
import { ShortReport } from './api-shorts-report-entity.entity';
import { ID } from '@nestjs/graphql';

/**
 * Definition of the Short entity as object type
 */
@ObjectType()
export class Short {
  /**
   * The id of the short
   */
  @Field(() => ID)
  id!: string;

  /**
   * The id of the user who uploaded the short
   */
  @Field()
  userId!: string;

  /**
   * The description/name of the short
   */
  @Field({ nullable: true })
  description!: string;

  /**
   * The url of the short
   */
  @Field({ nullable: true })
  link!: string;

  /**
   * The url of the thumbnail of the short
   */
   @Field({ nullable: true })
   thumbnail!: string;

  /**
   * The date the short was created
   */
  @Field(() => Date)
  datePosted!: Date;

  /**
   * Whether the short is archived or not
   */
  @Field(() => Boolean)
  archived!: boolean;

  /**
   * The user who uploaded the short
   */
  @Field(() => User)
  user!: User;

  /**
   * The tags of the short
   */
  @Field(() => [ShortTag])
  shortTag!: ShortTag[];

  /**
   * The reports of the short
   */
  @Field(() => [ShortReport])
  shortReport!: ShortReport[];
}

/**
 * Definition of the ShortCreateInput entity as input type
 */
@InputType()
export class ShortCreateInput {
  /**
   * The description/name of the short
   */
  @Field({ nullable: true })
  description!: string;

  /**
   * The url of the short
   */
  @Field({ nullable: true })
  link!: string;

  /**
   * The url of the thumbnail of the short
   */
  @Field({ nullable: true })
  thumbnail!: string; 

  /**
   * Whether the short is archived or not
   */
  @Field(() => Boolean)
  archived!: boolean;

  /**
   * The tags of the short
   */
  @Field(() => [ShortTagInput])
  shortTag!: ShortTagInput[];
}

/**
 * Definition of the ShortUpdateInput entity as input type
 */
@InputType()
export class ShortUpdateInput {
  /**
   * The id of the short
   */
  @Field(() => ID)
  id!: string;

  /**
   * The description/name of the short
   */
  @Field({ nullable: true })
  description!: string;

  /**
   * The url of the short
   */
  @Field({ nullable: true })
  link!: string;

  /**
   * The url of the thumbnail of the short
   */
  @Field({ nullable: true })
  thumbnail!: string;

  /**
   * Whether the short is archived or not
   */
  @Field(() => Boolean, { nullable: true })
  archived!: boolean;
}
