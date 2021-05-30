import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceRequest } from 'src/app/models/service-request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  completed!: ServiceRequest[];
  active!: ServiceRequest[];

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  readCompleted() {
    this.afs.collection('ServiceRequest', ref => ref.where('status','==','completed').orderBy('status', 'asc'));
  }

  readActive(): void {
    this.afs.collection('ServiceRequest', ref => ref.where('status', '==', 'active').orderBy('status','asc'));
  }

}
