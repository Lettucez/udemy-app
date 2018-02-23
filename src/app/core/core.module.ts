import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { AuthGuardService } from "../auth/auth-guard.service";
import { RecipeService } from "../recipes/recipe.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { DataStorageService } from "../data-storage/data-storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule, CommonModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        RecipeService, ShoppingListService, DataStorageService, AuthService, AuthGuardService
    ]
})
export class CoreModule {

}