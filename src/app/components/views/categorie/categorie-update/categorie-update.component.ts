import { ActivatedRoute, Router } from "@angular/router";
import { Categorie } from "./../categorie.model";
import { CategorieService } from "./../categorie.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categorie-update",
  templateUrl: "./categorie-update.component.html",
  styleUrls: ["./categorie-update.component.scss"],
})
export class CategorieUpdateComponent implements OnInit {
  categorie: Categorie = {
    id: "",
    name: "",
    description: "",
  };

  constructor(
    private service: CategorieService,
    private rout: ActivatedRoute,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.categorie.id = this.rout.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categorie.id!).subscribe((response) => {
      this.categorie = response;
    });
  }

  update() : void {
    this.service.update(this.categorie).subscribe((response)=>{
      this.router.navigate(['categories']);
      this.service.message('Categoria atualizada com sucesso!');
    }, err => {
      for(let i=0; i < err.error.list.length; i++){
        this.service.message('*' + err.error.list[i].message)
      }
    });
  }

  cancel() : void{
    this.router.navigate(['categories']);
  }



}
