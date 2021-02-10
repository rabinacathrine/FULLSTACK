import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProgradregistrationService {

  constructor(private http:HttpClient) { }

  public addPrograd(prograds){
    return this.http.post('http://localhost:8080/addPrograd',prograds)
  }

  public viewAll(){
    return this.http.get('http://localhost:8080/getprograd')
  }

  public deleteprograd(id){
    return this.http.delete('http://localhost:8080/deleteprograd/'+id)
  }
  public getprogradbyid(id){
    return this.http.delete('http://localhost:8080/getprogradbyid/'+id)
  }
}
