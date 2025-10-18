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
        <div>
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