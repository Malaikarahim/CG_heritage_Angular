import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q5 } from './q5';

describe('Q5', () => {
  let component: Q5;
  let fixture: ComponentFixture<Q5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q5],
    }).compileComponents();

    fixture = TestBed.createComponent(Q5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
