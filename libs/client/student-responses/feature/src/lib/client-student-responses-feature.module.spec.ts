import { async, TestBed } from '@angular/core/testing';
import { ClientStudentResponsesFeatureModule } from './client-student-responses-feature.module';

describe('ClientStudentResponsesFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientStudentResponsesFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientStudentResponsesFeatureModule).toBeDefined();
  });
});
