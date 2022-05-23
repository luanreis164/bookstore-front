import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../book.service';
import { FormControl, Validators } from '@angular/forms';
import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  id_cat : String = "";

  book : Book = {
    id: '',
    title: '',
    authorName:'',
    description: ''
  };

  title = new FormControl('',[Validators.minLength(3)]);
  authorName = new FormControl('',[Validators.minLength(2)]);
  description = new FormControl('',[Validators.minLength(10)]);

  constructor(
    private service : BookService,
    private route : ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.book.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById() : void {
    this.service.findById(this.book.id!).subscribe((response) => {
    this.book = response;
    })
  }

  update() : void {
    this.service.update(this.book).subscribe((response)=>{
    this.router.navigate([`categories/${this.id_cat}/books/`]);
    this.service.message("Livro atualizado com sucesso!");
    },error =>{
      this.router.navigate([`categories/${this.id_cat}/books/`]);
      this.service.message("Falha ao tentar atualizar livro. Tente novamente!");
    })
  }

  getMessage(){
    if(this.title.invalid){
      return 'O campo título deve conter entre 3 e 100 caracteres.'
    }
    if(this.authorName.invalid){
      return 'O campo autor deve conter entre 2 e 100 caracteres.'
    }
    if(this.description.invalid){
      return 'O campo descrição deve conter entre 10 e 2.000.00. caracteres.'
    }
    return false;
  }

  cancel() : void{
    this.router.navigate([`categories/${this.id_cat}/books/`]);
  }

  

}
