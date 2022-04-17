import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDividerModule } from "@angular/material/divider";
import { NgxsModule, Store } from "@ngxs/store";
import { RequestForAccessComponent } from "./request-for-access.component";
import { AccessState } from "./stores/request-for-access.state";

describe("RequestForAccessComponent", () => {
  let store: Store;
  let component: RequestForAccessComponent;
  let fixture: ComponentFixture<RequestForAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestForAccessComponent],
      imports: [
        MatDividerModule,
        HttpClientModule,
        NgxsModule.forRoot([AccessState], { developmentMode: true }),
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize resource state", () => {
    store
      .select((state) => state.accessState.accessGranted[0])
      .subscribe({
        next: (status) => {
          expect(status).toBe("Rejected");
        },
      });
  });

  it('should change state to "Pending"', () => {
    const spy = jest.spyOn(component, "onClick");
    component.onClick(0, "Academic Record");
    expect(spy).toHaveBeenCalled();
    store
      .select((state) => state.accessState.accessGranted[0])
      .subscribe({
        next: (status) => {
          expect(status).toBe("Pending");
        },
      });
  });
});
