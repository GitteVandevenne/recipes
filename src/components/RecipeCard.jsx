import {Link} from "react-router-dom";
import React from "react";

function RecipeCard({recipe}) {
    return (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className={`bg-gray-200 p-4 rounded-2xl mb-3 shadow grid grid-cols-2 items-center justify-between`}>
                <div className={`text-xl font-semibold align-middle text-black`}>{recipe.title}</div>
                {recipe.image && (
                    <img src={recipe.image} alt={recipe.title} className="rounded-xl ml-auto w-30 h-auto"/>)}
            </div>
        </Link>
    )
}

export default RecipeCard;