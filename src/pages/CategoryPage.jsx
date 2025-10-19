import React from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {categories} from "../data/categories.js";
import RecipeList from "../components/RecipeList.jsx";
import Navigation from "../components/Navigation.jsx";

function CategoryPage() {
    const {categoryId} = useParams();
    const category = categories.find(c => c.id === Number(categoryId));

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subcategoryId = searchParams.get("subcategory");

    const subCategory = category.subcategories.find(c => c.id === Number(subcategoryId));

    if (!category) return null;
    return (
        <div className="">
            <Navigation/>
            {subCategory ? (
                <div className={`w-[50%] mx-auto`}>
                    <div className="text-center ">
                        <h1 className="text-xl mb-3 font-semibold text-gray-800">
                            {subCategory.title}
                        </h1>
                        <h2 className="text-sm mb-3 font-semibold text-gray-600">
                            {subCategory.description ? subCategory.description : ""}
                        </h2>
                    </div>
                    <RecipeList category={category} subcategory={subCategory}/>
                </div>
            ) : (
                <div className={`w-[50%] mx-auto`}>
                    <div className="text-center ">
                        <h1 className="text-xl mb-3 font-semibold text-gray-800">
                            {category.title}
                        </h1>
                        <h2 className="text-sm mb-3 font-semibold text-gray-600">
                            {category.description ? category.description : ""}
                        </h2>
                    </div>

                    {category.subcategories.length > 0 ? (
                        category.subcategories.map((subcategory) => (
                            <Link to={`/category/${category.id}?subcategory=${subcategory.id}`} key={subcategory.id}>
                                <div className={`bg-gray-200 p-4 rounded-2xl mb-3 shadow`}>
                                    <div
                                        className={`text-left text-xl font-semibold text-black`}>{subcategory.title}</div>
                                    <div
                                        className={`text-left text-sm font-semibold text-gray-600`}>{subcategory.description ? subcategory.description : ''}</div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <RecipeList category={category}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default CategoryPage;