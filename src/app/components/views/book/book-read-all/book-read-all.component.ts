import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Book } from "./../book.model";
import { BookService } from "./../book.service";

@Component({
  selector: "app-book-read-all",
  templateUrl: "./book-read-all.component.html",
  styleUrls: ["./book-read-all.component.scss"],
})
export class BookReadAllComponent implements OnInit {
  displayedColumns: string[] = ["id", "title", "books", "actions"];

  id_cat: String = "";

  books: Book[] = [];

  constructor(
    private service: BookService,
    private rout: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.rout.snapshot.paramMap.get("id_cat")!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategorie(this.id_cat).subscribe((response) => {
      this.books = response;
      console.log(this.books);
    });
  }

  navToCreateBook() : void{
    this.router.navigate([`categories/${this.id_cat}/books/create`]);
  }

  backToCategories() : void{
    this.router.navigate(['categories']);
  }

}
