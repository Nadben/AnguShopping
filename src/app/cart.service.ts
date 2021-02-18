import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ShippingCost } from './ShippingCost';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<ShippingCost[]> {
    return this.http.get<ShippingCost[]>('/assets/shipping.json');
  }
}

