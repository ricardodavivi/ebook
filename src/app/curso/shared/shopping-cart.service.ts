

import { IShoppingCartModel } from './ishopping-cart-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private items: IShoppingCartModel[] = [];
  private subtotal = 0;
  private deliveryValue = 0;
  private deliveryFree = false;
  private total = 0;
  private score = 0;

  itemResult = new BehaviorSubject(this.items);
  subtotalResult = new BehaviorSubject(this.subtotal);
  deliveryValueResult = new BehaviorSubject(this.deliveryValue);
  deliveryFreeResult = new BehaviorSubject(this.deliveryFree);
  totalResult = new BehaviorSubject(this.total);
  scoreResult = new BehaviorSubject(this.score);
  warningResult = new BehaviorSubject('');
  stopCheckout = new BehaviorSubject(false);

  

  constructor() {
    const result = localStorage.getItem('shopping-cart');
    if (result) {
      this.items = JSON.parse(result);
    }
    this.updateValues();
  }

  get(id: number) {
    return this.items.find(i => i.id === id);
  }

  getAll() {
    return this.items;
    
  }

  add(item: IShoppingCartModel) {
    item.id = this.items.length + 1;
    this.items.push(item);
    console.log(this.items)
    this.save();
  }

  update(item: IShoppingCartModel) {
    const result = this.get(item.id);
    result.quantity = item.quantity;
    result.note = item.note;

    this.save();
  }

  remove(item: IShoppingCartModel) {
    const index = this.items.findIndex(i => i.id === item.id);
    this.items.splice(index, 1);
    this.save();
  }

  private save() {
    
    const result = JSON.stringify(this.items);
    localStorage.setItem('shopping-cart', result);
    
    
    this.updateValues();
  }

  private updateValues() {
    this.itemResult.next(this.items);
    
    
    this.subtotalResult.next(this.subtotal);
    this.deliveryValueResult.next(this.deliveryValue);
    this.deliveryFreeResult.next(this.deliveryFree);
    this.totalResult.next(this.total);
    this.scoreResult.next(this.score);
  }

  

  

  
  

  
  

  

  

  

  getTotal() {
    return this.total;
  }

  clear() {
    this.items = [];
    this.subtotal = 0;
    this.deliveryValue = 0;
    this.deliveryFree = false;
    this.total = 0;
    this.score = 0;
    this.save();
  }
}