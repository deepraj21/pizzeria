import { Component, OnInit, inject } from '@angular/core';
import { OrderPizzaService } from 'src/app/order-pizza.service';
import { CartService } from 'src/app/cart.service';
import { Pizza } from 'src/app/Pizza';

interface PizzaApiResponse {
  data: Pizza[];
}

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  private orderPizza = inject(OrderPizzaService);
  private cart = inject(CartService);

  pizzas: Pizza[] = [];
  cartItems: Pizza[] = [];
  
  ngOnInit(): void {
    this.orderPizza.getPizzaOrders().subscribe((data: PizzaApiResponse) => {
      this.pizzas = data.data;
    });
    
    this.cart.cartData$.subscribe(data => {
      this.cartItems = data;
    });
  }

  isInCart(pizza: Pizza): boolean {
    return this.cart.isInCart(pizza);
  }

  toggleCart(p: Pizza) {
    if (this.isInCart(p)) {
      this.cart.removeFromCart(p);
    } else {
      this.cart.addToCart(p);
    }
  }
}
