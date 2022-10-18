import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/constants/customers.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() customers: ICustomer[]

  ngOnInit(): void {
  }

}
