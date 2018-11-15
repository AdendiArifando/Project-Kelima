import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeAdendi.model';
import { RecipeAdendiService } from '../recipeAdendi.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recipe-listAdendi',
  templateUrl: './recipe-listAdendi.component.html',
  styleUrls: ['./recipe-listAdendi.component.css']
})
export class RecipeListAdendiComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  //property:class recipe
 
  constructor(private recipeAdendiService:RecipeAdendiService,
  private router:Router,
private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeAdendiService.getRecipes();
  }

  //onRecipeSelected(recipe:Recipe){
    //this.recipeWasSelected.emit(recipe);
  //}
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
