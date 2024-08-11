import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoverService {

//https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=625684e6272885681bba44ad1f23ad8d
  private  chaveAcesso : string = "625684e6272885681bba44ad1f23ad8d";
  private  uriAcesso : string = "https://api.openweathermap.org/data/2.5/weather"

  constructor(private request : HttpClient) {

  }

  public getTempo(cidade:string) : Observable<any> {

   let getBody : Observable<any> =  this.request.get(this.uriAcesso + `?q=${cidade}&units=metric&mode=json&appid=${this.chaveAcesso}`, {});

    return getBody;
  }

}
