import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWastePolicy } from './e-waste-policy';

describe('EWastePolicy', () => {
  let component: EWastePolicy;
  let fixture: ComponentFixture<EWastePolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EWastePolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EWastePolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
