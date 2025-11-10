import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderPizzaComponent } from './components/order-pizza/order-pizza.component';
import { CartComponent } from './components/cart/cart.component';
import { BuildPizzaComponent } from './components/build-pizza/build-pizza.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'order', component: OrderPizzaComponent },
  {path:'cart', component: CartComponent},
  {path:'build', component: BuildPizzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
