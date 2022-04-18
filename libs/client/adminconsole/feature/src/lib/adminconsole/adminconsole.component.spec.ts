import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu';
import { FooterModule } from '../../../../../shared/components/footer/src/lib/footer.module';
import { HeaderModule } from '../../../../../shared/components/header/src/lib/header.module';

import { AdminconsoleComponent } from './adminconsole.component';

describe('AdminconsoleComponent', () => {
  let component: AdminconsoleComponent;
  let fixture: ComponentFixture<AdminconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatMenu, MatIcon, AdminconsoleComponent ],
      imports: [HeaderModule, FooterModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
