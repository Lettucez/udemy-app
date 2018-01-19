import { Component, OnInit } from '@angular/core';
import { Ingredient, mockIngredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
    this.ingredients = mockIngredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onClearList() {
    this.ingredients = [];
  }

}
