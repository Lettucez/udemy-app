import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm') shoppingListForm: NgForm;
  amount: number;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addShoppingItem(shoppingItem: NgForm) {
    console.log(shoppingItem);
    const newIngredient: Ingredient = {name: shoppingItem.value.name, amount: shoppingItem.value.amount};
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    shoppingItem.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearItem();
  }

  onClearItem() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  checkValue(amount) {
    if (amount < 1 && amount !== "") {
      this.amount = 1;
    }
  }
}
