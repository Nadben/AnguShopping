import { ShippingComponent } from "./shipping/shipping.component";

export class ShippingCost implements Shipping {

    constructor(public type: string,
        public price: number) {

    }
}

export interface Shipping {
    type: string;
    price: number;
}