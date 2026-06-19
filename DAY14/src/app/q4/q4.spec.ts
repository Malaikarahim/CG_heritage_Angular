import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4 } from './q4';

describe('Q4', () => {
  let component: Q4;
  let fixture: ComponentFixture<Q4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q4],
    }).compileComponents();

    fixture = TestBed.createComponent(Q4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
