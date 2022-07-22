import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit, OnDestroy {
  profile: any = {};

  isLoading: boolean;

  orders: any[] = [];
  ordersSub: Subscription;

  constructor(private OrderService: OrderService) {}

  ngOnInit() {
    this.ordersSub = this.OrderService.orders.subscribe(
      (order) => {
        console.log('Order data: ', order);
        if (order instanceof Array) {
          this.orders = order;
        }
      },
      (e) => {
        console.log(e);
      }
    );
    this.getData();
  }

  getHelp(order) {
    console.log(order);
  }

  async getData() {
    this.isLoading = true;
    setTimeout(async () => {
      this.profile = {
        name: 'Ash ICEP',
        phone: '9109109100',
        email: 'ash@gmail.com',
      };
      await this.OrderService.getOrders();
      this.isLoading = false;
    }, 3000);
  }

  logout() {}

  reOrder(order) {
    console.log(order);
  }
  ngOnDestroy() {
    if (this.ordersSub) this.ordersSub.unsubscribe();
  }
}
