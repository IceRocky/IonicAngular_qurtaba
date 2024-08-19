import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCleanPage } from './home-clean.page';

describe('HomeCleanPage', () => {
  let component: HomeCleanPage;
  let fixture: ComponentFixture<HomeCleanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCleanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
