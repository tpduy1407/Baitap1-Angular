import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemLaptopComponent } from './baitap4-item-laptop.component';

describe('Baitap4ItemLaptopComponent', () => {
  let component: Baitap4ItemLaptopComponent;
  let fixture: ComponentFixture<Baitap4ItemLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
