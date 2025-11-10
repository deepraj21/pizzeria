import { Component, OnInit, inject } from '@angular/core';
import { BuildPizzaService, ApiResponse, Topping } from 'src/app/build-pizza.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {
  private buildservice = inject(BuildPizzaService);
  private cartservice = inject(CartService);

  toppings: Topping[] = [];
  toppingtotal = 0;
  flags: Record<string, boolean> = {};

  ngOnInit(): void {
    this.buildservice.getIngredients().subscribe((res: ApiResponse) => {
      this.toppings = res.data;
    });

    this.toppingtotal = this.cartservice.toppingtotal;
    
    for (const topping of this.cartservice.toppings) {
      this.flags[topping.id] = true;
    }
  }

  checkUncheck(e: Event, topping: Topping): void {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      this.cartservice.addToppings(topping);
      this.flags[topping.id] = !this.flags[topping.id];
    } else {
      this.cartservice.removeToppings(topping);
      this.flags[topping.id] = !this.flags[topping.id];
    }
  }

  getTotal(): void {
    this.cartservice.getToppingsTotal();
    this.toppingtotal = this.cartservice.toppingtotal;
  }
}