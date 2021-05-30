import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { ServiceRequest } from 'src/app/models/service-request';
import { SRService } from 'src/app/services/sr-services.service';
import { UpdateModalComponent } from '../modals/update-modal/update-modal.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  requests!: ServiceRequest[];
  
  constructor(private dbService: SRService, private dialog: MatDialog) {
    this.getAll();
   }

  ngOnInit(): void {
  }
  
  openDialog(item: ServiceRequest) {
    this.dialog.open(UpdateModalComponent, {
      height: '600px',
      width: '800px',
      data: {
        key: item
      }
   });
  }

  getAll(): void {
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
