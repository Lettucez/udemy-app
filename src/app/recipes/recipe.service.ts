import { Injectable } from "@angular/core";
import { Recipe, MockRecipes } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";


@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
    recipes: Recipe[] = MockRecipes;

    constructor() {
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes);
    }

    getRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes);
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes);
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes);
    }
}