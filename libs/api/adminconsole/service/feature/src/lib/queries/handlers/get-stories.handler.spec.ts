// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ShortsRepository} from '../../../../../../../shorts/repository/data-access/src/lib/api-shorts-repository.repository'
import { GetStoriesHandler } from './get-stories.handler';

describe('GetStoriesHandler', () => {
  let prisma: ShortsRepository; 
  it('should be defined', () => {
    expect(new GetStoriesHandler(prisma)).toBeDefined();
    expect(new GetStoriesHandler(prisma)).toBeTruthy();
  });
});
