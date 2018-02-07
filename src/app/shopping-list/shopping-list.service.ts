import { Injectable } from "@angular/core";
import { Ingredient, mockIngredients } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = mockIngredients;

    getIngredients() {
        return this.ingredients;
        // return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients);
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientsChanged.emit(this.ingredients.slice());
    }
}