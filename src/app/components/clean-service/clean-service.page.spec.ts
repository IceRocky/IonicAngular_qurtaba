import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CleanServicePage } from './clean-service.page';

describe('CleanServicePage', () => {
  let component: CleanServicePage;
  let fixture: ComponentFixture<CleanServicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
