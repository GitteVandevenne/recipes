import React from "react";
import CategoryList from "../components/CategoryList.jsx";

function Home() {

    return (
        <div>
            <div className="text-center ">
                <h1 className="text-xl mb-10 font-semibold text-gray-800">
                    My recipes
                </h1>
            </div>
            <CategoryList />
        </div>
    )
}

export default Home;