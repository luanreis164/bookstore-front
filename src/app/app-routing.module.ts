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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
