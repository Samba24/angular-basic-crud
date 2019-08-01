import { Injectable } from '@angular/core';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { HttpClient } from '@angular/common/http';
import Random from '../classes/Random';
import {environment} from '../environments/env';

@Injectable({
  providedIn: 'root'
})
export class RandomService{

  constructor(private httpClient : HttpClient) { }

  add(random : Random){
    return this.httpClient.post(`${environment.apiUrl}/random/add`,random).toPromise();
  }

  edit(random : Random){
    return this.httpClient.post(`${environment.apiUrl}/random/update/${random.id}`,random).toPromise();
  }

  remove(random : Random){
    return this.httpClient.delete(`${environment.apiUrl}/random/delete/${random.id}`).toPromise();
  }

  getAll(){
    return this.httpClient.get(`${environment.apiUrl}/randoms`);
  }
}
