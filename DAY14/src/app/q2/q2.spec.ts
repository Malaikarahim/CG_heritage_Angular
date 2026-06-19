import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q2 } from './q2';

describe('Q2', () => {
  let component: Q2;
  let fixture: ComponentFixture<Q2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q2],
    }).compileComponents();

    fixture = TestBed.createComponent(Q2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
