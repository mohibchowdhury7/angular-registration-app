import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  _url = 'http://localhost:3000/massage'

  constructor(private _http: HttpClient) { }

  getData(userData: any){
    return this._http.post<any>(this._url, userData)
  }
}
