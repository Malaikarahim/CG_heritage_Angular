import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAssignment } from './rxjs-assignment';

describe('RxjsAssignment', () => {
  let component: RxjsAssignment;
  let fixture: ComponentFixture<RxjsAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsAssignment],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
