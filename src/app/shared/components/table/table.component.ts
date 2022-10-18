import { Component, Input } from '@angular/core';
import { ICustomer } from 'src/app/constants/customers.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() customers: ICustomer[]

}
