import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tick} from "./Tick";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string  = "";
  constructor(private http:HttpClient) {}
  GetChart(){
    return this.http.get<Tick[]>(this.url);
  }
}
