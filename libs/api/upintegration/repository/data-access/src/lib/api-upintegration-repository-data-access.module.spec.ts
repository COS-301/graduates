import { async, TestBed } from '@angular/core/testing';
import { UpIntegrationRepository } from './api-upintegration-repository-data-access';

describe('ApiUpintegrationRepositoryDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UpIntegrationRepository],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(UpIntegrationRepository).toBeDefined();
  });
});
