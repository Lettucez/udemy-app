import { Injectable } from "@angular/core";
import { Recipe, MockRecipes } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipes: Recipe[] = MockRecipes;

    constructor() {
    }

    getRecipes() {
        return this.recipes;
    }

}