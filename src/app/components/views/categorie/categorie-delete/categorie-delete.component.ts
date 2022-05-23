import { Categorie } from './../categorie.model';
import { CategorieService } from './../categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie-delete',
  templateUrl: './categorie-delete.component.html',
  styleUrls: ['./categorie-delete.component.scss']
})
export class CategorieDeleteComponent implements OnInit {

  categorie : Categorie = {
    id: '',
    name:'',
    description:''
  }

  constructor(private router : Router,private service: CategorieService,private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.categorie.id = this.rout.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categorie.id!).subscribe(response => {
      this.categorie = response;
    })
  }

  delete() : void{
    this.service.delete(this.categorie.id!).subscribe((response)=>{
      this.router.navigate(['categories']);
      this.service.message('Categoria deletada com sucesso!');
    },err => {
      this.service.message('Erro ao tentar deletar! Não é possivel excluir uma categoria com livros');
    })
  }

  cancel() : void{
    this.router.navigate(['categories']);
  }

}
