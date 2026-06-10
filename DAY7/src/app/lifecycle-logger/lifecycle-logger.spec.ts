import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleLogger } from './lifecycle-logger';

describe('LifecycleLogger', () => {
  let component: LifecycleLogger;
  let fixture: ComponentFixture<LifecycleLogger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleLogger],
    }).compileComponents();

    fixture = TestBed.createComponent(LifecycleLogger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
