import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl : String = environment.baseUrl;

  constructor(private http : HttpClient,) { }

  findAllByCategorie(id_cat: String) : Observable<Book[]>{
    const url = `${this.baseUrl}/books?categorie=${id_cat}`
    return this.http.get<Book[]>(url);
  }


}
