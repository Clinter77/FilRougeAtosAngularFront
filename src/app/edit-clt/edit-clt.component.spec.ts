import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCltComponent } from './edit-clt.component';

describe('EditCltComponent', () => {
  let component: EditCltComponent;
  let fixture: ComponentFixture<EditCltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
