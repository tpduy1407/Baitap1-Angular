import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemSmartphoneComponent } from './baitap4-item-smartphone.component';

describe('Baitap4ItemSmartphoneComponent', () => {
  let component: Baitap4ItemSmartphoneComponent;
  let fixture: ComponentFixture<Baitap4ItemSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
