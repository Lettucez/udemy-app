import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { Store } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private store: Store<fromApp.AppState>) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    return this.store.select('auth').take(1).switchMap(
      (authState: fromAuth.State) => {
        const token = authState.token;
        return this.http.put("https://udemy-app-b9c87.firebaseio.com/recipes.json?auth=" + token, recipes);
      }
    );
  }
  

  getRecipes() {
    return this.store.select('auth').take(1).switchMap(
      (authState: fromAuth.State) => {
        const token = authState.token;
        return this.http.get<Recipe[]>("https://udemy-app-b9c87.firebaseio.com/recipes.json?auth=" + token)
          .map(
            (recipes) => {
              for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
              }
              return recipes;
            }
          )
      }
    );
  }

}
