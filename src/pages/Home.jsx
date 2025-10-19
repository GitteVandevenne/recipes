import React from "react";
import CategoryList from "../components/CategoryList.jsx";

function Home() {
    return (
        <div className={`overflow-hidden bg-five min-h-screen`}>
            <div className="relative w-full h-100 overflow-hidden text-center">
                <img
                    src={"/assets/Header.jpg"}
                    alt={'header'}
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">My recipes</h1>
                </div>
            </div>
            <div className="relative mt-10 flex justify-center">
                <div className="w-[80%]">
                    <CategoryList />
                </div>
            </div>
        </div>
    )
}

export default Home;