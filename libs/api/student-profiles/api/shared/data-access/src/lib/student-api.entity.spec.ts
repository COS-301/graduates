import { Student } from './student-api.entity';

describe('StudentApiEntity', () => {
  it('should be defined', () => {
    expect(new Student()).toBeDefined();
  });
});
