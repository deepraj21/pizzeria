import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OrderPizzaComponent } from './components/order-pizza/order-pizza.component';
import { CartComponent } from './components/cart/cart.component';
import { BuildPizzaComponent } from './components/build-pizza/build-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderPizzaComponent,
    CartComponent,
    BuildPizzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
