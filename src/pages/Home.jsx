import React from "react";
import CategoryList from "../components/CategoryList.jsx";

function Home() {

    return (
        <div className="bg-gray-600 flex p-15 flex-1 min-h-screen flex-col min-w-0 transition-all duration-300 ease-in-out gap-y-12">
            <div className="text-center ">
                <h1 className="text-xl mb-3 font-semibold text-gray-800">
                    My recipes
                </h1>
            </div>
            <CategoryList />
        </div>
    )
}

export default Home;