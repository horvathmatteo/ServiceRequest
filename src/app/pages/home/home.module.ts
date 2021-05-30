import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule, NavModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
