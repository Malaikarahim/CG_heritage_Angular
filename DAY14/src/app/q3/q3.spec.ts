import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q3 } from './q3';

describe('Q3', () => {
  let component: Q3;
  let fixture: ComponentFixture<Q3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q3],
    }).compileComponents();

    fixture = TestBed.createComponent(Q3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
