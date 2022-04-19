import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from './categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl: String = environment.baseUrl;

  constructor(private http : HttpClient) {
  }

    findAll(): Observable<Categorie[]>{
      const url = `${this.baseUrl}categories`
      return this.http.get<Categorie[]>(url);
    }

   
}
