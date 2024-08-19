import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickServicePage } from './quick-service.page';

describe('QuickServicePage', () => {
  let component: QuickServicePage;
  let fixture: ComponentFixture<QuickServicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
