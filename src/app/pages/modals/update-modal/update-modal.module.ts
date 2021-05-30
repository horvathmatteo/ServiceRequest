import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateModalComponent } from './update-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [UpdateModalComponent],
  imports: [
    CommonModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule
  ],
  exports: [UpdateModalComponent]
})
export class UpdateModalModule { }
