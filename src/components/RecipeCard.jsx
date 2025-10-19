import {Link} from "react-router-dom";
import React from "react";

function RecipeCard({recipe}) {
    const hasImage = !!recipe.image;

    return (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className={`bg-tertiary relative w-55 h-55 rounded-full overflow-hidden shadow-lg flex items-center justify-center 
                transition-transform duration-300 hover:scale-105`}>
                {hasImage && (
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}

                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center bg-four/70 text-white px-3 rounded-full
                        transition-opacity duration-300
                         ${hasImage ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                >
                    <h2 className="text-lg font-semibold">{recipe.title}</h2>
                </div>
            </div>

        </Link>
    )
}

export default RecipeCard;