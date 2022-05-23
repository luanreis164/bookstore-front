import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private http : HttpClient, private _snack: MatSnackBar) { }

  findAllByCategorie(id_cat: String) : Observable<Book[]>{
    const url = `${this.baseUrl}/books?categorie=${id_cat}`;
    return this.http.get<Book[]>(url);
  }

  create(book : Book, id_cat: String) : Observable<Book>{
    const url = `${this.baseUrl}/books?categorie=${id_cat}`;
    return this.http.post<Book>(url,book);
  }

  findById(id : String) : Observable<Book>{
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url);
  }

  update(book : Book) : Observable<Book>{
    const url = `${this.baseUrl}/books/${book.id}`;
    return this.http.put<Book>(url,book);
  }

  delete(id : String) : Observable<void>{
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete<void>(url);
  }

  message(str:string) : void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition:'end',
      verticalPosition:'top',
      duration: 4100
    })
  }


}
