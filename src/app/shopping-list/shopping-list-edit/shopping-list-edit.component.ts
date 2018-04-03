import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

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
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        (data) => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.shoppingListForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
          } else {
            this.editMode = false;
          }
        }
      );
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

  addShoppingItem(shoppingItem: NgForm) {
    console.log(shoppingItem);
    const newIngredient: Ingredient = {name: shoppingItem.value.name, amount: shoppingItem.value.amount};
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredient));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    shoppingItem.reset();
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
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
