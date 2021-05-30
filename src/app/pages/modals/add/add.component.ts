import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiceRequest } from 'src/app/models/service-request';
import { SRService } from 'src/app/services/sr-services.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  serviceReq!: ServiceRequest;
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


  constructor(private dbService: SRService, private dialog: MatDialog) {
   }


  ngOnInit(): void {
  }

  create() {
    this.serviceReq = this.form.value;
    this.dbService.create(this.serviceReq);
    alert("Request created successfully!");
    this.dialog.closeAll();
  }

}
