import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildPizzaService {

  constructor(private http: HttpClient) { }

  readonly SERVER_URL = 'https://pizzeria-server.vercel.app'

  getIngredients(){
    return this.http.get(`${this.SERVER_URL}/api/ingredient/get-data`)
  }
}
