import { Injectable, EventEmitter } from "@angular/core";
import { Recipe, MockRecipes } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipes: Recipe[] = MockRecipes;
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {
    }

    selectRecipe(): EventEmitter<Recipe> {
        return this.recipeSelected;
    }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }
}