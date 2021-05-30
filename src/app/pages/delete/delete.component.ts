import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServiceRequest } from 'src/app/models/service-request';
import { SRService } from 'src/app/services/sr-services.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  requests!: ServiceRequest[];

  constructor(private dbService: SRService) {
    this.getAll();
   }

  ngOnInit(): void {
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

  deleteService(id: any): void {
    this.dbService.delete(id).then(() => {
      alert("Deleted successfully");
    }).catch(err => console.log(err));
  }

}
