import { Component, Input, OnInit } from '@angular/core';
import { ServiceRequest } from 'src/app/models/service-request';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item!: ServiceRequest;

  constructor() { }

  ngOnInit(): void {
  }

}
