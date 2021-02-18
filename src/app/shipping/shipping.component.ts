import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


import { catchError, map, tap } from 'rxjs/operators';
import { ShippingCost } from '../ShippingCost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCost: Observable<ShippingCost[]> = this.cartService.getShippingPrices();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
