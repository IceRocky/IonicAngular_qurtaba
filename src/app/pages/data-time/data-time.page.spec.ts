import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTimePage } from './data-time.page';

describe('DataTimePage', () => {
  let component: DataTimePage;
  let fixture: ComponentFixture<DataTimePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
