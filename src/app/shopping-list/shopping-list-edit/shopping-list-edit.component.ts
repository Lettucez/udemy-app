import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  amount: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addShoppingItem(shoppingItem: NgForm) {
    console.log(shoppingItem);
    this.shoppingListService.addIngredient({name: shoppingItem.value.name, amount: shoppingItem.value.amount});
  }

  clearList() {
    this.shoppingListService.onClearList();
  }

  checkValue(amount) {
    if (amount < 1 && amount !== "") {
      this.amount = 1;
    }
  }
}
