import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormoreComponent } from './formore.component';

describe('FormoreComponent', () => {
  let component: FormoreComponent;
  let fixture: ComponentFixture<FormoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
