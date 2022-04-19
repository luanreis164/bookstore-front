import { CategorieReadComponent } from './components/views/categorie/categorie-read/categorie-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'categories',
    component: CategorieReadComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
