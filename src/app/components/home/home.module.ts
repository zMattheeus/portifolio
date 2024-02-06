import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import {HeaderComponent} from 'src/app/shared/header/header.component'
import {BtnPrimaryComponent} from 'src/app/shared/btn-primary/btn-primary.component'
import { MainComponent } from 'src/app/shared/main/main.component';
import { SobreComponent } from 'src/app/shared/sobre/sobre.component';
import { ProjetoComponent } from 'src/app/shared/projeto/projeto.component';
import { BoxProjectsComponent } from 'src/app/shared/box-projects/box-projects.component';
import { TecnologiasComponent } from 'src/app/shared/tecnologias/tecnologias.component';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainComponent,
    SobreComponent,
    ProjetoComponent,
    BoxProjectsComponent,
    TecnologiasComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
