import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalService } from '../global/global.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  model: any = {};
  deliveryCharge = 20;
  private _cart = new BehaviorSubject<any>(null);

  get cart() {
    return this._cart.asObservable();
  }

  constructor(private storage: StorageService, private global: GlobalService) { }

  getCart() {
    return this.storage.getStorage('cart'); ////////////////// 6.20 of video
  }

  async getCartData() {
    let data: any = await this.getCart();
    console.log('model: ', this.model);
    if(data?.value) {
      this.model = await JSON.parse(data.value);
      console.log(this.model);
      await this.calculate();
      this._cart.next(this.model);
    }
  }

  alertClearCart(index, items, data) {
    this.global.showAlert(
      'Your cart contain items from a different restaurant. Would you like to reset your cart before browsing the restaurant?',
      'Items already in Cart',
      [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            return;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.clearCart();
            this.model = {};
            this.quantityPlus(index, items, data);
          }
        }
      ]
    )
  }

  async quantityPlus(index, items?, restaurant?) {
    try {
      console.log(this.model.items[index]);
      if(items) this.model.items = [...items];
      if(restaurant) {
        this.model.restaurant = {};
        this.model.restaurant = restaurant;
      }
      console.log('q plus: ', this.model.items[index]);

      if (!this.model.items[index].quantity || this.model.items[index].quantity === 0) {
        this.model.items[index].quantity = 1;
      } else {
        this.model.items[index].quantity += 1;
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch (e) {
      console.log(e);
      throw(e);
    }
  }

  async quantityMinus(index) {
    try {
      if(this.model.items[index].quantity !== 0) {
        this.model.items[index].quantity -= 1; // this.model.items[index].quantity = this.model.items[index].quantity - 1
      } else {
        this.model.items[index].quantity = 0;
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async calculate() {
    let item = this.model.items.filter(x => x.quantity > 0);
    this.model.items = item;
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.deliveryCharge = 20;
    this.model.grandTotal = 0;

    item.forEach(element => {
      this.model.totalItem += element.quantity;
      this.model.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.model.deliveryCharge = this.deliveryCharge;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (parseFloat(this.model.totalPrice) + parseFloat(this.model.deliveryCharge)).toFixed(2);
    if(this.model.totalItem == 0) {
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart();
      this.model = null;
    }
    console.log('cart: ', this.model);
  }

  async clearCart() {
    this.global.showLoader();
    await this.storage.removeStorage('cart');
    this._cart.next(null);
    this.global.hideLoader();
  }

  saveCart(model?) {
    if(model) this.model = model;
    this.storage.setStorage('cart', JSON.stringify(this.model));
    // this._cart.next(this.model);
  }
}
