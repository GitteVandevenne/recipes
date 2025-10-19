import {useParams} from "react-router-dom";
import {recipes} from "../data/recipes";
import Navigation from "../components/Navigation.jsx";
import React from "react";

function RecipePage() {
    const {recipeId} = useParams();
    const recipe = recipes.find(r => r.id === parseInt(recipeId));
    if (!recipe) return <p>Recipe not found!</p>;

    return (
        <div>
            <Navigation/>
            <div className="p-4 bg-white rounded-3xl shadow w-[50%] mx-auto">
                <div className={`grid grid-cols-2 justify-between`}>
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>

                        <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients</h2>
                        {recipe.ingredients.length > 0 ? (
                            <ul className="list-disc ml-6">
                                {recipe.ingredients.map((i, idx) => (
                                    <li key={idx}>{i}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No ingredients found</p>
                        )}
                    </div>
                    {recipe.image && (
                        <img src={recipe.image} alt={recipe.title} className="rounded-xl mr-10 mt-10 ml-auto mb-4 max-h-50"/>)}
                </div>


                <h2 className="text-xl font-semibold mt-4 mb-2">Instructions</h2>
                {recipe.instructions.length > 0 ? (
                    <ol className="list-decimal ml-6">
                        {recipe.instructions.map((step, idx) => (
                            <li key={idx}>
                                {step.split("\n").map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br/>
                                    </React.Fragment>
                                ))}
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p>No instructions found</p>
                )}
            </div>
        </div>
    );
}

export default RecipePage;
