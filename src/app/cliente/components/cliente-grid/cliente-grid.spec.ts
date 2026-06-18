import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGrid } from './cliente-grid';

describe('ClienteGrid', () => {
  let component: ClienteGrid;
  let fixture: ComponentFixture<ClienteGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
