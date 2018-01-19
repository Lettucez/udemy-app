import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onRecipesClicked = new EventEmitter();
  @Output() onShoppingListClicked = new EventEmitter();

  isRecipesActive: boolean = true;
  isShoppingActive: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showRecipes() {
    this.onRecipesClicked.emit();
  }

  showShoppingList() {
    this.onShoppingListClicked.emit();
  }

}
