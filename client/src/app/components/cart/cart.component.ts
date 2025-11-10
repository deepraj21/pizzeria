import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Pizza } from 'src/app/Pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Pizza[] = [];
  total: number = 0;
  toppingtotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Initialize with current cart state
    this.cart = this.cartService.cart;
    this.total = this.cartService.getTotal();
    this.toppingtotal = this.cartService.getToppingsTotal();
    
    // Subscribe to cart updates
    this.cartService.cartData$.subscribe(data => {
      this.cart = data;
      this.total = this.cartService.getTotal();
      this.toppingtotal = this.cartService.getToppingsTotal();
    });
  }

  onMinus(pizza: Pizza) {
    this.cartService.decrease(pizza);
  }

  onPlus(pizza: Pizza) {
    this.cartService.increase(pizza);
  }

  remove(pizza: Pizza) {
    this.cartService.removeFromCart(pizza);
  }

  paylo() {
    // Payment logic can be implemented here
    alert('Payment functionality to be implemented');
  }

  clear() {
    this.cartService.clearCart();
  }

  getItemTotal(pizza: Pizza): number {
    return (pizza.qty || 1) * parseInt(pizza.price);
  }
}
