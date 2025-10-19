import React from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {categories} from "../data/categories.js";
import {recipes} from "../data/recipes.js";

function Navigation() {
    const location = useLocation();

    let category;
    let subCategory;
    let recipe;
    const isCategory = location.pathname.includes("category");
    if (isCategory) {
        const {categoryId} = useParams();
        category = categories.find(c => c.id === Number(categoryId));
    }


    const isRecipe = location.pathname.includes("recipe");
    if (isRecipe) {
        const {recipeId} = useParams();
        recipe = recipes.find(r => r.id === Number(recipeId));
        category = categories.find(c => c.id === Number(recipe.category));
        if (recipe.subcategory) {
            subCategory = category.subcategories.find(c => c.id === Number(recipe.subcategory));
        }
    }

    const searchParams = new URLSearchParams(location.search);
    const subcategoryId = searchParams.get("subcategory");
    if (subcategoryId) {
        subCategory = category.subcategories.find(c => c.id === Number(subcategoryId));
    }

    return (
        <div className="w-full flex justify-center mb-10 text-sm text-primary">
            <Link to={`/`}>
                Home
            </Link>
            <span>/</span>
            {isCategory && (
                <div>
                    <Link to={`/category/${category.id}`}>
                        {category.title}
                    </Link>
                    <span>/</span>
                </div>
            )}
            {subcategoryId && (
                <div>
                    <Link to={`/category/${category.id}?subcategory=${subCategory.id}`}>
                        {subCategory.title}
                    </Link>
                    <span>/</span>
                </div>
            )}
            {isRecipe && (
                <div>
                    <Link to={`/category/${recipe.category}`}>
                        {category.title}
                    </Link>
                    <span>/</span>
                    {subCategory && (

                        <Link to={`/category/${recipe.category}?subcategory=${subCategory.id}`}>
                            {subCategory.title}/
                        </Link>
                    )}
                    <Link to={`/recipe/${recipe.id}`}>
                        {recipe.title}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navigation;