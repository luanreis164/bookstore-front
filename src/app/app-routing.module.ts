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

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
