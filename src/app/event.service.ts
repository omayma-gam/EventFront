import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = "http://localhost:8083/event";

  constructor(private http:HttpClient) { }


  AfficherEvent() :Observable<any>{
    return  this.http.get<any>(this.url)
  }

  AjouterEvent(poste:any):Observable<any> {
    return  this.http.post(this.url,poste);
  }

  afficherEventparid(id:any):Observable<any>{
    return  this.http.get(`${this.url}/${id}`);
  }

  supprimerEvent(id:number):Observable<any>{
    return  this.http.delete(`${this.url}/${id}`)
  }

  EditEvent(edit:any,id:number):Observable<any>{
    return this.http.put(`${this.url}/${id}`,edit)
  }
}
