import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from 'src/app/constants/customers.constants';
import { ICustomer } from 'src/app/constants/customers.interface';
import { ICoords } from 'src/app/constants/customers.interface';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  public customers = CUSTOMERS;
  public filteredCustomers: ICustomer[] = [];
  public filterText: string = '';
  public coords: ICoords[] = [];
  public filterStatus: string = '';
  public filterDate: string = '';
  public map = true;

  ngOnInit(): void {
    this.filteredCustomers = this.customers;
    this.coords = this.getCoords();
  }

  public onInput(): void {
    this.filteredCustomers = this.customers.filter((customer: ICustomer) => customer.task.toLowerCase().includes(this.filterText.toLowerCase()));
    this.coords = this.getCoords();
  }
  public onChangeSelect(): void {
    this.filteredCustomers = this.customers.filter((customer: ICustomer) => customer.statusText === this.filterStatus);
    this.coords = this.getCoords();
  }

  public onChangeDate(): void {
    this.filteredCustomers = this.customers.filter((customer: ICustomer) => new Date(customer.date) < new Date(this.filterDate));
    this.coords = this.getCoords();
  }

  public getCoords(): ICoords[] {
    return this.filteredCustomers.map((customer: ICustomer) => customer.coords);
  }

}
