import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1 } from './q1';

describe('Q1', () => {
  let component: Q1;
  let fixture: ComponentFixture<Q1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q1],
    }).compileComponents();

    fixture = TestBed.createComponent(Q1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
