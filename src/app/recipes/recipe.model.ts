import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];
}

export const MockRecipes: Recipe[] = [{
    name: "Fudge",
    description: "This recipe creates Fudge",
    imagePath: "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/old-fashioned-chocolate-fudge-recipe_17271.jpg",
    ingredients: [
        { name: "Chocolate", amount: 2 },
        { name: "Butter", amount: 3 }, 
        { name: "Sugar", amount: 1 }
    ]
},
{
    name: "Cake",
    description: "This recipe creates cake",
    imagePath: "http://homecookingadventure.com/images/recipes/Chocolate_Mirror_Cake_main.jpg",
    ingredients: [
        { name: "Flour", amount: 3 }, 
        { name: "Eggs", amount: 2 }, 
        { name: "Butter", amount: 3}
    ]
}];