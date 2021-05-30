import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { UpdateRoutingModule } from './update-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UpdateModalModule } from '../modals/update-modal/update-modal.module';



@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule, UpdateRoutingModule, MatCardModule, MatButtonModule, UpdateModalModule
  ],
  exports: [UpdateComponent]
})
export class UpdateModule { }
