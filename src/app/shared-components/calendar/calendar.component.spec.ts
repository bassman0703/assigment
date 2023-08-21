import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SahredComponentsComponent } from './sahred-components.component';

describe('SahredComponentsComponent', () => {
  let component: SahredComponentsComponent;
  let fixture: ComponentFixture<SahredComponentsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SahredComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahredComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
