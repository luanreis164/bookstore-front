import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from './categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl: String = environment.baseUrl;

  constructor(private http : HttpClient,private _snack : MatSnackBar) {
  }

    findAll(): Observable<Categorie[]>{
      const url = `${this.baseUrl}/categories`
      return this.http.get<Categorie[]>(url);
    }

    findById(id : String) : Observable<Categorie>{
      const url = `${this.baseUrl}/categories/${id}`;
      return this.http.get<Categorie>(url);
    }

    create(categorie: Categorie) : Observable<Categorie>{
      const url = `${this.baseUrl}/categories`
      return this.http.post<Categorie>(url,categorie);
    }

    update(categorie : Categorie) : Observable<void>{
      const url = `${this.baseUrl}/categories/${categorie.id}`;;
      return this.http.put<void>(url,categorie);
    }
    
    delete(id : String) : Observable<void>{
      const url = `${this.baseUrl}/categories/${id}`;
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
