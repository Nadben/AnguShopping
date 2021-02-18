import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule, } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsAlertComponent } from './product-list/products-alert/products-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
];

@NgModule({
  imports: [
    [materialModules],
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartViewComponent },
      { path: 'shipping', component: ShippingComponent }
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductsAlertComponent,
    ProductDetailsComponent,
    CartViewComponent,
    ShippingComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
