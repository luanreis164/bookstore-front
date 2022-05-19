import { Categorie } from "./../categorie.model";
import { Component, OnInit } from "@angular/core";
import { CategorieService } from "../categorie.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-categorie-read",
  templateUrl: "./categorie-read.component.html",
  styleUrls: ["./categorie-read.component.scss"],
})
export class CategorieReadComponent implements OnInit {
  categories: Categorie[] = [];

  displayedColumns: string[] = [
    "id",
    "name",
    "description",
    "books",
    "actions",
  ];

  constructor(private service: CategorieService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
      this.categories = response;
    });
  }

  createCategorie() {
    this.router.navigate(["categories/create"]);
  }
}
