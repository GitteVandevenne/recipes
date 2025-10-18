import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

function RecipePage() {
    const { recipeId } = useParams();
    const recipe = recipes.find(r => r.id === parseInt(recipeId));

    if (!recipe) return <p>Recipe not found!</p>;

    return (
        <div className="p-4 max-w-3xl mx-auto">
            {recipe.image && (<img src={recipe.image} alt={recipe.title} className="rounded-xl mb-4" />)}
            <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
            <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients</h2>
            {recipe.ingredients.length > 0 ? (
                <ul className="list-disc ml-6">
                    {recipe.ingredients.map((i, idx) => (
                        <li key={idx}>{i}</li>
                    ))}
                </ul>
            ):(
                <p>No ingredients found</p>
            )}


            <h2 className="text-xl font-semibold mt-4 mb-2">Instructions</h2>
            {recipe.instructions.length > 0 ? (
                <ol className="list-decimal ml-6">
                    {recipe.instructions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ol>
            ) : (
                <p>No instructions found</p>
            )}

        </div>
    );
}

export default RecipePage;
