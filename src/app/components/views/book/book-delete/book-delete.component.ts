import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../book.service';
import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  id_cat : String = "";

  book : Book = {
    id: '',
    title: '',
    authorName:'',
    description: ''
  };

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

  cancel() : void{
    this.router.navigate([`categories/${this.id_cat}/books`]);
  }

  delete() : void{
    this.service.delete(this.book.id!).subscribe(() => {
      this.router.navigate([`categories/${this.id_cat}/books`]);
      this.service.message("Livro deletado com sucesso!");
    },error =>{
      this.router.navigate([`categories/${this.id_cat}/books`]);
      this.service.message("Falha ao deletar livro livro. Tente novamente!");
    })
  }

}
