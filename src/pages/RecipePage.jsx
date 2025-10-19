import {useParams} from "react-router-dom";
import {recipes} from "../data/recipes";
import Navigation from "../components/Navigation.jsx";
import React from "react";

function RecipePage() {
    const {recipeId} = useParams();
    const recipe = recipes.find(r => r.id === parseInt(recipeId));
    if (!recipe) return <p>Recipe not found!</p>;

    return (
        <div className="bg-five absolute top-0 w-full min-h-screen">
            <div className={`mt-10`}>
                <Navigation/>
            </div>

            <div className={`w-[80%] mx-auto`}>
                <div className="text-center ">
                    <h1 className="text-2xl font-semibold text-secondary">
                        {recipe.title}
                    </h1>
                </div>
                <div className={`relative ${recipe.image ? 'mt-24' : 'mt-10'}`}>
                    {recipe.image && (
                        <div
                            className="absolute -top-16 -right-16 bg-tertiary w-50 h-50 rounded-full overflow-hidden shadow-xl z-10 flex items-center justify-center"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className={`p-6 bg-primary/80 rounded-3xl shadow mx-auto z-0`}>
                        <div className={`flex justify-between items-start mb-10 gap-4 p-6`}>
                                <div className="basis-3/10">
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
                            <div className={'basis-7/10'}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;
