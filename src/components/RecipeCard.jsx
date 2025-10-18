import {Link} from "react-router-dom";
import React from "react";

function RecipeCard({recipe}) {
    return (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className={`bg-gray-200 p-4 rounded-2xl mb-3 shadow min-h-40`}>
                <div className={`text-xl font-semibold text-black`}>{recipe.title}</div>
            </div>
        </Link>
    )
}

export default RecipeCard;