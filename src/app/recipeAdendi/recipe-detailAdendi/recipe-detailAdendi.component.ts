import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeAdendi.model';
import { RecipeAdendiService } from '../recipeAdendi.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detailAdendi',
  templateUrl: './recipe-detailAdendi.component.html',
  styleUrls: ['./recipe-detailAdendi.component.css']
})
export class RecipeDetailAdendiComponent implements OnInit {
 // @Input() recipe:Recipe;
  recipe:Recipe;
  id:number;

  constructor(private recipeAdendiService:RecipeAdendiService,
              private route:ActivatedRoute) { }

  ngOnInit() {
  this.route.params
  .subscribe (
  (params:Params)=>{
    this.id=+params['id'];
    this.recipe=this.recipeAdendiService.getRecipe(this.id);
  }
)
  }

  onAddShoppingList(){
    this.recipeAdendiService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
