import { ApiHosting } from './api-hosting.entity';

describe('ApiHosting', () => {
  it('should be defined', () => {
    expect(new ApiHosting()).toBeDefined();
  });
});

describe('Test ApiHosting object', () => {
  // test() is an alias for it()
  it('Should have the name of mockApi and status of operational', () => {
    const api_h: ApiHosting = new ApiHosting();
    api_h.name = 'mockApi';
    api_h.status = 'Operational';
    expect(api_h).toEqual({name: 'mockApi', status: 'Operational'});
  });
});