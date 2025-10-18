import React from "react";
import {categories} from "../data/categories.js";
import {Link} from "react-router-dom";

function CategoryList() {
    return (
        <div className={`gap-y-12`}>
            {categories.map((category) => (
                <Link to={`/category/${category.id}`} key={category.id}>
                    <div className={`bg-gray-200 p-4 rounded-2xl mb-3 shadow`}>
                        <div className={`text-xl font-semibold text-black`}>{category.title}</div>
                        <div
                            className={`text-sm font-semibold text-gray-600`}>{category.description ? category.description : ''}</div>
                        {category.subcategories.length > 0 && (
                            category.subcategories.length < 4 ? (
                                <div className={`text-xs font-semibold text-gray-400`}>
                                    <span className={``}>Subcategories: {' '} </span>
                                    {category.subcategories.map((subcategory, i) => (
                                        <span key={subcategory.id} className={``}>
                                            {subcategory.title}
                                            {i < category.subcategories.length - 1 && ','}
                                            {' '}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <div className={`text-xs font-semibold text-gray-400`}>
                                    <span className={``}>Subcategories: {' '} </span>
                                    {category.subcategories.map((subcategory, i) => (
                                        <span key={subcategory.id} className={``}>
                                            {i < 3 && subcategory.title}
                                            {i < 2 ? ',' : i === 3 ? ', ...' : ''}
                                            {' '}
                                        </span>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryList;