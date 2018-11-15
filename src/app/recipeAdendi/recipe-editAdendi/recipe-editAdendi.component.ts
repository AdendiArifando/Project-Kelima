import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-editAdendi',
  templateUrl: './recipe-editAdendi.component.html',
  styleUrls: ['./recipe-editAdendi.component.css']
})
export class RecipeEditAdendiComponent implements OnInit {
  id:number;
  editMode=false;

  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params : Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;


        console.log(this.editMode);
      }
    )
  }

}
