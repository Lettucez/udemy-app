import { Injectable } from "@angular/core";
import { Recipe, MockRecipes } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipes: Recipe[] = MockRecipes;

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }
}