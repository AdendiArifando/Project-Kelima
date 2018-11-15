import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderAdendiComponent } from './headerAdendi/headerAdendi.component';
import { RecipeAdendiComponent } from './recipeAdendi/recipeAdendi.component';
import { ShoppingListAdendiComponent } from './shopping-listAdendi/shopping-listAdendi.component';
import { RecipeDetailAdendiComponent } from './recipeAdendi/recipe-detailAdendi/recipe-detailAdendi.component';
import { RecipeListAdendiComponent } from './recipeAdendi/recipe-listAdendi/recipe-listAdendi.component';
import { RecipeItemAdendiComponent } from './recipeAdendi/recipe-listAdendi/recipe-itemAdendi/recipe-itemAdendi.component';
import { ShoppingEditAdendiComponent } from './shopping-listAdendi/shopping-editAdendi/shopping-editAdendi.component';
import { DropdownAdendiDirective } from './sharedAdendi/dropdownAdendi.directive';
import { ShoppingListAdendiService } from './shopping-listAdendi/shopping-listAdendi.service';
import { RecipeStartAdendiComponent } from './recipeAdendi/recipe-startAdendi/recipe-startAdendi.component';
import { RecipeEditAdendiComponent } from './recipeAdendi/recipe-editAdendi/recipe-editAdendi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdendiComponent,
    RecipeAdendiComponent,
    ShoppingListAdendiComponent,
    RecipeListAdendiComponent,
    RecipeDetailAdendiComponent,
    RecipeItemAdendiComponent,
    ShoppingEditAdendiComponent,
    DropdownAdendiDirective,
    RecipeStartAdendiComponent,
    RecipeEditAdendiComponent 
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListAdendiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
