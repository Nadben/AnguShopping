import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  items = this.CartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.items = this.CartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
