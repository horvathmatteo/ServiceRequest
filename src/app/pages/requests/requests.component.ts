import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceRequest } from 'src/app/models/service-request';
import { SRService } from 'src/app/services/sr-services.service';
import { AddComponent } from '../modals/add/add.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests!: ServiceRequest[];

  constructor(private dialog: MatDialog, private dbService: SRService) {
      this.getRequests();
   }

  openDialog() {
    this.dialog.open(AddComponent, { height: '600px', width: '800px', });
  }

  ngOnInit(): void {
  }

  getRequests(): void {
    this.dbService.read().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
    ).subscribe(data => {
      this.requests = data;
    });
  }

}
