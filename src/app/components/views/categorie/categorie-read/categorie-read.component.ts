import { Categorie } from './../categorie.model';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie-read',
  templateUrl: './categorie-read.component.html',
  styleUrls: ['./categorie-read.component.scss']
})
export class CategorieReadComponent implements OnInit {

  categories: Categorie[] = [];

  displayedColumns: string[] = ['id','name','description','books','actions'];

  constructor(private service: CategorieService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(response =>{
      console.log(response)
      this.categories = response;
    })
  }

} 
