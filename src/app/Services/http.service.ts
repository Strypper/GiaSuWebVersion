import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  baseUrl: string;
  basePublicApiUrl: string;
  constructor(private _http: HttpClient) {
    this.baseUrl = "https://giasuapi2.azurewebsites.net";
   }
  getFromPublicApi<T>(url :string): Observable<T>{
    const fullUrl = this.baseUrl + url;
    return this._http.get<T>(fullUrl, this.httpOptions);
  }
}
