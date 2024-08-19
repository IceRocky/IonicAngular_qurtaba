import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeepCleaningPage } from './deep-cleaning.page';

describe('DeepCleaningPage', () => {
  let component: DeepCleaningPage;
  let fixture: ComponentFixture<DeepCleaningPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepCleaningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
