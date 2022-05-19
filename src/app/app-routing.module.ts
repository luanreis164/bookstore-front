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
    path:'categories/:id/books',
    component: BookReadAllComponent
  },
  {
    path:'categories/:id/books/create',
    component: BookCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
