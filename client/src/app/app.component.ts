import { Component, OnInit, inject } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  private cart = inject(CartService);

  cartCount = 0;

  ngOnInit(): void {
    this.cart.cartData$.subscribe(data => {
      this.cartCount = data.length;
    });
  }
}
