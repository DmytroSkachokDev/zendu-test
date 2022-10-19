import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ICustomer } from 'src/app/constants/customers.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() customers: ICustomer[];

  public maxSize = 5;
  public page = 1; 
  public color: ThemePalette = 'primary';
  public headerTask = {completed: false};
  public allComplete: boolean = false;
  public displayedColumns: string[] = ['checkbox', 'task', 'status', 'from', 'to', 'address', 'date'];

  public updateAllComplete(): void {
    this.allComplete = this.customers != null && this.customers.every((customer: ICustomer) => customer.completed);
  }

  public someComplete(): boolean {
    if (this.customers == null) {
      return false;
    }
    return this.customers.filter((customer: ICustomer) => customer.completed).length > 0 && !this.allComplete;
  }

  public setAll(completed: boolean): void {
    this.allComplete = completed;
    if (this.customers == null) {
      return;
    }
    this.customers.forEach((customer: ICustomer) => (customer.completed = completed));
  }

  public getCurrentSubmissions(currentPage: number): string {
    if (this.customers.length <= 10) {
      return `${this.customers.length}`;
    } else {
      if (currentPage === 1) {
        return `1-10`;
      } else if (currentPage === Math.ceil(this.customers.length / 10)) {
        return `${currentPage - 1}1-${this.customers.length}`;
      } else {
        return `${currentPage - 1}1-${currentPage}0`;
      }
    }
  }

}
