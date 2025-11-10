import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Topping {
  id: string;
  image: string;
  price: string;
  tname: string;
  __v: number;
  _id: string;
}

export interface ApiResponse {
  data: Topping[];
}

@Injectable({
  providedIn: 'root'
})
export class BuildPizzaService {
  private http = inject(HttpClient);

  readonly SERVER_URL = 'https://pizzeria-server.vercel.app';

  getIngredients() {
    return this.http.get<ApiResponse>(`${this.SERVER_URL}/api/ingredient/get-data`);
  }
}
