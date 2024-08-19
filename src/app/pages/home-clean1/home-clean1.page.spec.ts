import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeClean1Page } from './home-clean1.page';

describe('HomeClean1Page', () => {
  let component: HomeClean1Page;
  let fixture: ComponentFixture<HomeClean1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClean1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
