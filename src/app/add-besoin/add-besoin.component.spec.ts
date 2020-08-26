import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBesoinComponent } from './add-besoin.component';

describe('AddBesoinComponent', () => {
  let component: AddBesoinComponent;
  let fixture: ComponentFixture<AddBesoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBesoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
