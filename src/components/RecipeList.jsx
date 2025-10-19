import {recipes} from "../data/recipes.js";
import RecipeCard from "./RecipeCard.jsx";


function RecipeList({category, subcategory}) {
    let categoryRecipes;
    if (!subcategory) {
        categoryRecipes = recipes.filter(r => r.category === Number(category.id));
    } else {
        categoryRecipes = recipes.filter(r => r.subcategory === Number(subcategory.id));
    }
    return (
        <div className={`
            grid gap-6 justify-items-center
            ${categoryRecipes.length === 1 ? "grid-cols-1" : categoryRecipes.length === 2 ? "grid-cols-2" : categoryRecipes.length === 3 ? "grid-cols-3" : "grid-cols-4"}
        `}>
            {categoryRecipes.length > 0 ? (
                categoryRecipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    ))
            ) : (
                <p>No recipes for this category yet</p>
            )}

        </div>
    )
}

export default RecipeList;