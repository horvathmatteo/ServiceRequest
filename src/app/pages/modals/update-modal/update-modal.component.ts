import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceRequest } from 'src/app/models/service-request';
import { SRService } from 'src/app/services/sr-services.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  form: FormGroup = new FormGroup({
    category: new FormControl(),
    intent!: new FormControl(),
    subject!: new FormControl(),
    priority: new FormControl(),
    requester: new FormControl(),
    orderDetail: new FormControl(),
    performer: new FormControl(),
    status!: new FormControl()
  });

  request!: ServiceRequest;
  message = '';
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dbService: SRService, private dialog: MatDialog) {
    this.request = this.data.key;
  }

  ngOnInit(): void {
    
  }

  update(): void {
    this.dbService.update(this.request.id!, this.request).then(() => alert('Updated successfully'))
    .catch(err => console.log(err));
    this.dialog.closeAll();
  }

}
