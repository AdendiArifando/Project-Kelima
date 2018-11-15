import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipeAdendiComponent} from './recipeAdendi/recipeAdendi.component';
import {ShoppingListAdendiComponent} from './shopping-listAdendi/shopping-listAdendi.component';
import { RecipeStartAdendiComponent } from './recipeAdendi/recipe-startAdendi/recipe-startAdendi.component';
import { RecipeDetailAdendiComponent } from './recipeAdendi/recipe-detailAdendi/recipe-detailAdendi.component';
import { RecipeEditAdendiComponent } from './recipeAdendi/recipe-editAdendi/recipe-editAdendi.component';
const appRoutes:Routes=[
    { path : '', redirectTo: '/recipe',pathMatch:'full'},
    { path : 'recipes', component:RecipeAdendiComponent , children:[
        {path:'', component:RecipeStartAdendiComponent},
        {path:'new',component:RecipeEditAdendiComponent},
        {path:':id', component:RecipeDetailAdendiComponent},
        {path:':id/edit',component:RecipeEditAdendiComponent},

        ]},
    { path : 'shopping-listAdendi', component:ShoppingListAdendiComponent},

];

@NgModule ({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}