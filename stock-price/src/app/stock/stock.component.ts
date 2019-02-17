import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';


class Stock {
  date : Date
  symbol : string
  open : any
  close : any
  high : any
  low : any
  volume : any
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks : any
  symbol : string
  symbols : any
  constructor(private stockService:StockService) { }
  ngOnInit() { 
    console.log('loading ... symboles')
    this.stockService.getSysmbols()
      .subscribe(data => 
        this.symbols = data,
        err => console.log(err)
      );
  }

  title = 'Stock Price';

  search() {
    this.stockService.getStockBySymbol(this.symbol)
      .subscribe( response =>
        this.stocks = response,
        err => console.log(err)
      );
  }

  // loadSymbols(){
    
  // }

}
