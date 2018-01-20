export class Recipe {
    name: string;
    description: string;
    imagePath: string;
}

export const MockRecipes: Recipe[] = [{
    name: "Fudge",
    description: "This recipe creates Fudge",
    imagePath: "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/old-fashioned-chocolate-fudge-recipe_17271.jpg"
},
{
    name: "Cake",
    description: "This recipe creates cake",
    imagePath: "http://homecookingadventure.com/images/recipes/Chocolate_Mirror_Cake_main.jpg"
}];