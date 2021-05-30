import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';
import { DeleteRoutingModule } from './delete-routing.module';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [DeleteComponent],
  imports: [
    CommonModule, DeleteRoutingModule, MatCardModule, MatIconModule, MatButtonModule
  ]
})
export class DeleteModule { }
