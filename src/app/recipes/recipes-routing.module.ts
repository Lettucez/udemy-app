import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeInformationComponent } from "./recipe-information/recipe-information.component";
import { AuthGuardService } from "../auth/auth-guard.service";

const recipesRoutes: Routes = [
    {
        path: "recipes", component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
            { path: ':id', component: RecipeInformationComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}