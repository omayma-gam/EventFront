import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Client} from './models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {


  private url = "http://localhost:8081/client";

  constructor(private http:HttpClient) { }


  AfficherClient() :Observable<any>{
    return  this.http.get<any>(this.url)
  }

  AjouterClient(poste:any):Observable<any> {
   return  this.http.post(this.url,poste);
  }

  afficherClientparid(id:any):Observable<any>{
    return  this.http.get(`${this.url}/${id}`);
  }

  supprimerClient(id:number):Observable<any>{
    return  this.http.delete(`${this.url}/${id}`)
  }

  EditClien(edit:any,id:number):Observable<any>{
    return this.http.put(`${this.url}/${id}`,edit)
  }
}
