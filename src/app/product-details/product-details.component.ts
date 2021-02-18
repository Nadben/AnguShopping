import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private CartService: CartService,
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))

    // Find the product that correspond with the id provided in route.
    this.product = products.find(i => i.id === productIdFromRoute);


  }

  addToCart(product: any): void {
    this.CartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
