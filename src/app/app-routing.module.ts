import { BookReadComponent } from './components/views/book/book-read/book-read.component';
import { BookDeleteComponent } from './components/views/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/views/book/book-update/book-update.component';
import { BookCreateComponent } from './components/views/book/book-create/book-create.component';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { CategorieUpdateComponent } from './components/views/categorie/categorie-update/categorie-update.component';
import { CategorieDeleteComponent } from './components/views/categorie/categorie-delete/categorie-delete.component';
import { CategorieReadComponent } from './components/views/categorie/categorie-read/categorie-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CategorieCreateComponent } from './components/views/categorie/categorie-create/categorie-create.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'categories',
    component: CategorieReadComponent
  },
  {
    path:'categories/create',
    component: CategorieCreateComponent
  },
  {
    path:'categories/delete/:id',
    component: CategorieDeleteComponent
  },
  {
    path:'categories/update/:id',
    component: CategorieUpdateComponent
  },
  {
    path:'categories/:id_cat/books',
    component: BookReadAllComponent
  },
  {
    path:'categories/:id_cat/books/create',
    component: BookCreateComponent
  },
  {
    path:'categories/:id_cat/books/:id/update',
    component: BookUpdateComponent
  },
  {
    path:'categories/:id_cat/books/:id/delete',
    component: BookDeleteComponent
  },
  {
    path:'categories/:id_cat/books/:id/read',
    component: BookReadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
