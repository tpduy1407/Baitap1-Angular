import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4FooterComponent } from './baitap4-footer/baitap4-footer.component';
import { Baitap4ItemSmartphoneComponent } from './baitap4-item-smartphone/baitap4-item-smartphone.component';
import { Baitap4ItemLaptopComponent } from './baitap4-item-laptop/baitap4-item-laptop.component';



@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4FooterComponent, Baitap4ItemSmartphoneComponent, Baitap4ItemLaptopComponent],
  exports:[Baitap4Component,Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4FooterComponent, Baitap4ItemSmartphoneComponent, Baitap4ItemLaptopComponent],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
