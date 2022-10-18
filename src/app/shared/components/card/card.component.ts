import { Component, Input } from '@angular/core';

import { ICustomer } from 'src/app/constants/customers.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() customer: ICustomer;

}
