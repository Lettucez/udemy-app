import { Component, OnInit } from '@angular/core';
import { Recipe, mockRecipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
    this.recipes = mockRecipes;
  }

}
