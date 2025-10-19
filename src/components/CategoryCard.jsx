import { Link } from "react-router-dom";
import React from "react";

function CategoryCard({ category }) {
    const hasImage = !!category.image;

    return (
        <Link to={`/category/${category.id}`} key={category.id}>
            <div
                className={`bg-tertiary relative w-55 h-55 rounded-full overflow-hidden shadow-lg flex items-center justify-center 
                transition-transform duration-300 hover:scale-105`}
            >
                {hasImage && (
                    <img
                        src={category.image}
                        alt={category.title}
                        className="absolute inset-0 w-full h-full p-1 object-cover"
                    />
                )}

                {/* Overlay — visible on hover or always visible if no image */}
                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center bg-four/70 text-white px-3 rounded-full
                        transition-opacity duration-300
                         ${hasImage ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                >
                    <h2 className="text-lg font-semibold">{category.title}</h2>
                    {category.description && (
                        <p className="text-xs text-gray-300 mt-1">{category.description}</p>
                    )}
                    {category.subcategories?.length > 0 && (
                        <p className="text-[10px] text-gray-400 mt-2">
                            Subcategories:&nbsp;
                            {category.subcategories
                                .slice(0, 3)
                                .map((sub, i) => (
                                    <span key={sub.id}>
                                        {sub.title}
                                        {i < category.subcategories.slice(0, 3).length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            {category.subcategories.length > 3 && " ..."}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;
