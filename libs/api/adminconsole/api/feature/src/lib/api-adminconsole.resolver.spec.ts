import { TestBed } from '@angular/core/testing';

import { ApiAdminConsoleResolver } from './api-adminconsole.resolver';

describe('ApiAdminConsoleResolver', () => {
  let resolver: ApiAdminConsoleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ApiAdminConsoleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
