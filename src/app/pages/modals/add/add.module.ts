import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'; 


@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatOptionModule, MatSelectModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
