import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() onAddShoppingItem = new EventEmitter<Ingredient>();
  @Output() onClearList = new EventEmitter<Ingredient>();
  amount: number = 1;

  constructor() { }

  ngOnInit() {
  }

  addShoppingItem(shoppingItem: NgForm) {
    console.log(shoppingItem);
    this.onAddShoppingItem.emit({name: shoppingItem.value.name, amount: shoppingItem.value.amount});
  }

  clearList() {
    this.onClearList.emit();
  }

  checkValue(amount) {
    if (amount < 1 && amount !== "") {
      this.amount = 1;
    }
  }
}
