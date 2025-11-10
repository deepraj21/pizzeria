import { Component } from '@angular/core';
import { BuildPizzaService } from 'src/app/build-pizza.service';
import { CartService } from 'src/app/cart.service';

interface Topping {
  id: string;
  image: string;
  price: string;
  tname: string;
  __v: number;
  _id: string;
}

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent {

  constructor(private buildservice: BuildPizzaService,private cartservice: CartService) { }

  toppings:any=[];
  toppingtotal:number = 0;
  flags: boolean[] = [];

  ngOnInit(): void {
    this.buildservice.getIngredients().subscribe((res:any) => {
    this.toppings = res.data;
    // console.log(res.data)
    });

    this.toppingtotal=this.cartservice.toppingtotal;
    
    for (let i = 0; i < this.cartservice.toppings.length; i++) {
      this.flags[this.cartservice.toppings[i].id] = true;
    }
  }

  checkUncheck(e:any,topping:any){
    if(e.target.checked)
    {
    this.cartservice.addToppings(topping);
    this.flags[topping.id] = !this.flags[topping.id];
    }
    else
    {
    this.cartservice.removeToppings(topping);
    this.flags[topping.id] = !this.flags[topping.id];
    }
  }

  getTotal(){
     this.cartservice.getToppingsTotal();
     this.toppingtotal=this.cartservice.toppingtotal;
  }

}