import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage/data-storage.service';

import { Observable } from 'rxjs/Observable';

import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from '../../recipes/recipe.model';


import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,private recipeService: RecipeService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Observable<any>) => {
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes() .subscribe(
      (response: Recipe[]) => {
        this.recipeService.setRecipes(response);
      }
    );;
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
