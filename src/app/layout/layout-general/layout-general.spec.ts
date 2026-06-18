import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGeneral } from './layout-general';

describe('LayoutGeneral', () => {
  let component: LayoutGeneral;
  let fixture: ComponentFixture<LayoutGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutGeneral],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutGeneral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
