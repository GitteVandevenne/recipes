import React from "react";
import {categories} from "../data/categories.js";
import CategoryCard from "./CategoryCard.jsx";

function CategoryList() {
    return (
        <div className={`
            grid gap-6 justify-items-center
            ${categories.length === 1 ? "grid-cols-1" : categories.length === 2 ? "grid-cols-2" : categories.length === 3 ? "grid-cols-3" : "grid-cols-4"}
        `}>
            {categories.map((category) => (
                <CategoryCard category={category}/>
            ))}
        </div>
    )
}

export default CategoryList;