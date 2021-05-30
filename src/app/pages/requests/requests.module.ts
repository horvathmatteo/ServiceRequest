import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { AddModule } from '../modals/add/add.module';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [RequestsComponent],
  imports: [
    CommonModule, RequestsRoutingModule, MatIconModule, MatButtonModule, MatDialogModule, AddModule,
    MatGridListModule, MatCardModule
  ],
  exports: [RequestsComponent]
})
export class RequestsModule { }
