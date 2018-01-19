import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-information',
  templateUrl: './recipe-information.component.html',
  styleUrls: ['./recipe-information.component.css']
})
export class RecipeInformationComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
