import React from "react";
import {useParams} from "react-router-dom";
import {categories} from "../data/categories.js";

function CategoryPage() {
    const { categoryId } = useParams();
    const category = categories.find(c => c.id === Number(categoryId));

    if (!category) return null;
    return (
        <div className="bg-black text-white">
            {category.title}
        </div>
    )
}

export default CategoryPage;