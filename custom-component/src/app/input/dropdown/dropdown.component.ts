import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input('name') labelName: string;
  @Input('url') serviceUrl: string;
  hostUrl = "";
  datas: any;
  constructor(private el: ElementRef, private http: HttpClient) { }

  ngOnInit() {
    this.hostUrl = "http://localhost:8080/" + this.serviceUrl;
    console.log('****************', this.hostUrl);
    this.el.nativeElement.name = this.labelName;
    this.el.nativeElement.url = this.fetchdropdownData(this.hostUrl);
  }

  fetchdropdownData(url: string) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Accept', 'application/json')
    this.http.get(url, { headers: headers }).subscribe((res) => {
      //console.log(res.valueOf());
      this.datas = res;
    });


  }

}
