import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipes/recipe-list-item/recipe-list-item.component';
import { RecipeInformationComponent } from './recipes/recipe-information/recipe-information.component';
import { RecipesComponent } from './recipes/recipes.component';

import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

const routes: Routes = [
  { path: "", component: RecipesComponent },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeInformationComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
