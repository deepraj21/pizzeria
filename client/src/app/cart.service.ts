import { Injectable } from '@angular/core';
import { Pizza } from './Pizza';
import { BehaviorSubject } from 'rxjs';

interface Topping {
  id: string;
  tname: string;
  price: string;
  image?: string;
  _id?: string;
  __v?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Pizza[] = [];
  toppings: Topping[] = [];
  total = 0;
  toppingtotal = 0;

  private cartData = new BehaviorSubject<Pizza[]>([]);
  cartData$ = this.cartData.asObservable();

  clearCart(): void {
    this.cart = [];
    this.toppings = [];
    this.cartData.next(this.cart);
  }

  addToCart(pizza: Pizza): void {
    const existingPizza = this.cart.find(p => p._id === pizza._id);
    if (existingPizza) {
      existingPizza.qty = (existingPizza.qty || 1) + 1;
    } else {
      pizza.qty = 1;
      this.cart.push(pizza);
    }
    this.cartData.next(this.cart);
  }

  removeFromCart(pizza: Pizza): void {
    const index = this.cart.findIndex(p => p._id === pizza._id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartData.next(this.cart);
    }
  }

  isInCart(pizza: Pizza): boolean {
    return this.cart.some(p => p._id === pizza._id);
  }

  addToppings(topping: Topping): void {
    this.toppings.push(topping);
  }

  removeToppings(topping: Topping): void {
    const index = this.toppings.indexOf(topping);
    this.toppings.splice(index, 1);
  }

  increase(pizza: Pizza): void {
    const index = this.cart.findIndex(p => p._id === pizza._id);
    if (index !== -1) {
      this.cart[index].qty = (this.cart[index].qty || 1) + 1;
      this.cartData.next(this.cart);
    }
  }

  decrease(pizza: Pizza): void {
    const index = this.cart.findIndex(p => p._id === pizza._id);
    if (index !== -1) {
      const currentQty = this.cart[index].qty || 1;
      if (currentQty > 1) {
        this.cart[index].qty = currentQty - 1;
      } else {
        this.cart.splice(index, 1);
      }
      this.cartData.next(this.cart);
    }
  }

  getTotal(): number {
    this.total = 0;
    for (const item of this.cart) {
      this.total = this.total + ((item.qty || 1) * parseInt(item.price));
    }
    return this.total;
  }

  getToppingsTotal(): number {
    this.toppingtotal = 0;
    for (const item of this.toppings) {
      this.toppingtotal = this.toppingtotal + parseInt(item.price);
    }
    return this.toppingtotal;
  }
}
