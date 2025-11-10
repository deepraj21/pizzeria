import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderPizzaService {

  constructor(private http: HttpClient) { }

  readonly SERVER_URL = 'https://pizzeria-server.vercel.app'

  getPizzaOrders() {
    return this.http.get(`${this.SERVER_URL}/api/pizza/get-data`);
  }
}
