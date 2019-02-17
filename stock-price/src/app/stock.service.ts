import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  getStockBySymbol(symbol:string) {
    return this.http.get('http://localhost:8080/stock/symbol/'+symbol);
  } 

  getSysmbols(){
    return this.http.get('http://localhost:8080/stock/symbols');
  }
}
