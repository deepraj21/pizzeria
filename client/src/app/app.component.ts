import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private cart: CartService){}

  cartCount: number = 0;

  ngOnInit() {
    this.cart.cartData$.subscribe(data => {
      this.cartCount = data.length;
    })
  }
}
