import { OrderService } from '../../../shared/services/order.service';
import { Component } from '@angular/core';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  order$;
  
  constructor(private orderService: OrderService) {
    this.order$ = orderService.getOrders();
   }
}
