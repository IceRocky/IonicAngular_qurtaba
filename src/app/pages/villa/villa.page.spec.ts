import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VillaPage } from './villa.page';

describe('VillaPage', () => {
  let component: VillaPage;
  let fixture: ComponentFixture<VillaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
