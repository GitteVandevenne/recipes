import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import RecipePage from "./pages/RecipePage.jsx";


function App() {
    return (
        <div className="bg-blue-200 flex p-15 flex-1 min-h-screen flex-col transition-all duration-300 ease-in-out">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/category/:categoryId" element={<CategoryPage/>}/>
                    <Route path="/recipe/:recipeId" element={<RecipePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
