import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {CategorieReadComponent } from './components/views/categorie/categorie-read/categorie-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {CategorieCreateComponent } from './components/views/categorie/categorie-create/categorie-create.component';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CategorieDeleteComponent } from './components/views/categorie/categorie-delete/categorie-delete.component';
import { CategorieUpdateComponent } from './components/views/categorie/categorie-update/categorie-update.component';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { BookCreateComponent } from './components/views/book/book-create/book-create.component';
import { BookUpdateComponent } from './components/views/book/book-update/book-update.component';
import { BookDeleteComponent } from './components/views/book/book-delete/book-delete.component';
import { BookReadComponent } from './components/views/book/book-read/book-read.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategorieReadComponent,
    CategorieCreateComponent,
    CategorieDeleteComponent,
    CategorieUpdateComponent,
    BookReadAllComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    BookReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
