import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor( public http: HttpClient ) { }


  getMedico(){
     return this.http.get('...');
  }
}
