import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsappNewsService  {

  constructor(private http: HttpClient)  {  }

  getIndianNews (url_with_country_code:any) {
    return this.http.get(url_with_country_code);
  }

}
