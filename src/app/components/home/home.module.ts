import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import {HeaderComponent} from 'src/app/shared/header/header.component'
import {BtnPrimaryComponent} from 'src/app/shared/btn-primary/btn-primary.component'
import { MainComponent } from 'src/app/shared/main/main.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
