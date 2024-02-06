import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProjectsComponent } from './box-projects.component';

describe('BoxProjectsComponent', () => {
  let component: BoxProjectsComponent;
  let fixture: ComponentFixture<BoxProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxProjectsComponent]
    });
    fixture = TestBed.createComponent(BoxProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
