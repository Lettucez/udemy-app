import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient, mockIngredients } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = mockIngredients;

    getIngredients() {
        return this.ingredients;
        // return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
    }

    onClearList() {
        this.ingredients = [];
        this.ingredientsChanged.emit(this.ingredients);
        // this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientsChanged.emit(this.ingredients.slice());
      }
}