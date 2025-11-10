import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderPizzaService {
  private http = inject(HttpClient);

  readonly SERVER_URL = 'https://pizzeria-server.vercel.app';

  getPizzaOrders() {
    return this.http.get(`${this.SERVER_URL}/api/pizza/get-data`);
  }
}
