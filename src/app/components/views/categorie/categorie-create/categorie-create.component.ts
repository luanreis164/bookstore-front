import { Router } from '@angular/router';
import { Categorie } from './../categorie.model';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.scss']
})
export class CategorieCreateComponent implements OnInit {

  categorie : Categorie = {
    name: '',
    description: ''
  }

  constructor( private service : CategorieService,private router : Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.categorie).subscribe((response)=>{
      this.service.message('Categoria criada com sucesso!');
      this.router.navigate(['categories']);
    },
    err => {
      for(let i=0; i < err.error.list.length; i++){
        this.service.message(err.error.list[i].message)
      }
    })
  }

  cancel() : void {
    this.router.navigate(['categories']);
  }

}
