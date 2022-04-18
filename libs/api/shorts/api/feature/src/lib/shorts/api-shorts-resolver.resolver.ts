import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Root,
  registerEnumType,
} from '@nestjs/graphql';
import {
  Short,
  ShortCreateInput,
  ShortTag,
  ShortUpdateInput,
  ShortReport,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import {
  ShortsService,
  ShortsTagsService,
  ShortsReportsService,
} from '@graduates/api/shorts/service/feature';
import { NotFoundException } from '@nestjs/common';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import uuid from 'uuid';
import {
  FirebaseService,
  FirebaseFolders,
} from '@graduates/api/storage/repository/data-access';

@Resolver(Short)
export class ShortsResolver {
  constructor(
    private readonly service: ShortsService,
    private readonly tagsService: ShortsTagsService,
    private readonly reportsService: ShortsReportsService,
    private readonly fbService: FirebaseService
  ) {}

  @ResolveField()
  user(@Root() short: Short): Promise<AuthenticationUser> {
    return this.service.findUserById(short.userId);
  }

  @ResolveField(() => [ShortTag])
  async shortTag(@Root() short: Short): Promise<ShortTag[]> {
    return await this.tagsService.findTagsByShortId(short.id);
  }

  @ResolveField(() => [ShortReport])
  async shortReport(@Root() short: Short): Promise<ShortReport[]> {
    return await this.reportsService.getReportsForShort(short.id);
  }

  /**
   * Query to find all shorts
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async getAllShorts(): Promise<Short[]> {
    return await this.service.findAllShorts();
  }

  /**
   * Query to find a short by id
   * @param {string} id The id of the short to find
   * @returns {Promise<Short | null>}
   */
  @Query(() => Short)
  async getShortById(@Args('id') id: string): Promise<Short | null> {
    const res = await this.service.findShortById(id);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return res;
  }

  /**
   * Query to find shorts by user id
   * @param {string} userId The id of the user to find the shorts for
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async getShortsByUser(@Args('userId') userId: string): Promise<Short[]> {
    const res = await this.service.findShortsByUser(userId);
    if (!res) {
      throw new NotFoundException('User not found');
    }
    return res;
  }

  /**
   * Query to find shorts by tag id
   * @param {string} tagId The id of the tag to find the shorts for
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async getShortsByTag(@Args('tagId') tagId: string): Promise<Short[]> {
    return await this.service.findShortsByTag(tagId);
  }
  @Query(() => String)
  pingShorts() {
    return 'on';
  }

  /**
   * Mutation to create a short
   * @param {ShortCreateInput} short The short to create
   * @param {string} userId The id of the user to create the short for
   * @returns {Promise<Short | null>}
   */
  @Mutation(() => Short)
  async createShort(
    @Args('short') short: ShortCreateInput,
    @Args('userId') userId: string,
    @Args('vidString') vidString: string,
    @Args('thumbString') thumbString: string,
    @Args('vidCat', { type: () => FirebaseFolders }) vidCat: FirebaseFolders,
    @Args('thumbCat', { type: () => FirebaseFolders }) thumbCat: FirebaseFolders
  ): Promise<Short | null> {
    const vidName = uuid.v4();
    const thumbName = uuid.v4();

    await this.fbService
      .uploadAsBase64String(vidString, vidName, vidCat)
      .then((res) => {
        if (res) {
          this.fbService.getURLByName(vidName, vidCat).then((res) => {
            const vidRef = res;

            this.fbService
              .uploadAsBase64String(thumbString, thumbName, thumbCat)
              .then((res) => {
                if (res) {
                  this.fbService.getURLByName(vidName, vidCat).then((res) => {
                    const thumbRef = res;
                    return this.service.createShort(
                      short,
                      userId,
                      vidRef,
                      thumbRef
                    );
                  });
                }
              });
          });
        }
      });

    return null;
  }

  /**
   * Mutation to delete a short
   * @param {string} id The id of the short to delete
   * @returns {Promise<Short | null>}
   */
  @Mutation(() => Short)
  async deleteShort(@Args('id') id: string): Promise<Short | null> {
    const res = await this.service.deleteShort(id);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return res;
  }

  @Mutation(() => Short)
  async updateShort(
    @Args('short') short: ShortUpdateInput
  ): Promise<Short | null> {
    const res = await this.service.updateShort(short);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return await this.service.updateShort(short);
  }
}
