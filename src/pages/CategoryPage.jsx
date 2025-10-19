import React from "react";
import {useLocation, useParams} from "react-router-dom";
import {categories} from "../data/categories.js";
import RecipeList from "../components/RecipeList.jsx";
import Navigation from "../components/Navigation.jsx";
import CategoryCard from "../components/CategoryCard.jsx";

function CategoryPage() {
    const {categoryId} = useParams();
    const category = categories.find(c => c.id === Number(categoryId));

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subcategoryId = searchParams.get("subcategory");

    const subCategory = category.subcategories.find(c => c.id === Number(subcategoryId));

    if (!category) return null;
    return (
        <div className="bg-five absolute top-0 w-full min-h-screen">
            <div className={`mt-10`}>
                <Navigation/>
            </div>
            {subCategory ? (
                <div className={`w-[80%] mx-auto`}>
                    <div className="text-center ">
                        <h1 className="text-2xl mb-3 font-semibold text-secondary">
                            {subCategory.title}
                        </h1>
                        <h2 className="text-xl mb-3 text-tertiary">
                            {subCategory.description ? subCategory.description : ""}
                        </h2>
                    </div>
                    <div className="relative mt-10 flex justify-center">
                        <div className="w-[80%]">
                            <RecipeList category={category} subcategory={subCategory}/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`w-[80%] mx-auto`}>
                    <div className="text-center mb-10">
                        <h1 className="text-2xl mb-3 font-semibold text-secondary">
                            {category.title}
                        </h1>
                        <h2 className="text-xl mb-3 text-tertiary">
                            {category.description ? category.description : ""}
                        </h2>
                    </div>

                    {category.subcategories.length > 0 ? (
                        <div className={`
                             grid gap-6 justify-items-center
                             ${category.subcategories.length === 1 ? "grid-cols-1" : category.subcategories.length === 2 ? "grid-cols-2" : category.subcategories.length === 3 ? "grid-cols-3" : "grid-cols-4"}
                        `}>
                            {category.subcategories.map((subcategory) => (
                                <CategoryCard key={subcategory.id} category={category} subcategory={subcategory}/>
                            ))}
                        </div>
                    ) : (
                        <div className="relative mt-10 flex justify-center">
                            <div className="w-[80%]">
                                <RecipeList category={category}/>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CategoryPage;