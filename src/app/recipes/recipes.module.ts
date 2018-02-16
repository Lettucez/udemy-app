import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeInformationComponent } from "./recipe-information/recipe-information.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListItemComponent } from "./recipe-list-item/recipe-list-item.component";
import { RecipesComponent } from "./recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.module";


@NgModule({
    declarations: [
        RecipeEditComponent,
        RecipeInformationComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipeListItemComponent,
        RecipesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {
}