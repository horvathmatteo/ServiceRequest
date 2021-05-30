import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ServiceRequest } from '../models/service-request';

@Injectable({
  providedIn: 'root'
})
export class SRService {

  private dbPath = "/ServiceRequest";

  constructor(private afs: AngularFirestore) { }

  create(serviceReq: ServiceRequest): Promise<any> {
    return this.afs.collection(this.dbPath).add(serviceReq);
  }

  read(): AngularFirestoreCollection<ServiceRequest> {
    return this.afs.collection(this.dbPath);
  }

  update(id: string, data: any): Promise<any> {
    return this.afs.collection(this.dbPath).doc(id).update(data);
  }

  delete(id: string): Promise<any> {
    return this.afs.collection(this.dbPath).doc(id).delete();
  }


}
