import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';

const GENERATE_URL = 'http://localhost:3000/api/generate';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReportService(value: any): Observable<any> {
    console.log("=====> service call()")
    let input = JSON.stringify(value.ruleColumns);
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(GENERATE_URL, JSON.parse(input), { headers: httpHeaders });
  }
}
