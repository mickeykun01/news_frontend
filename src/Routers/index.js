import { BrowserRouter , Routes , Route } from "react-router-dom";
import Bollywood from "../Pages/Bollywood";
import BollywoodArticle from "../Pages/Bollywood/BollyArticle";
import Fitness from "../Pages/Fitness";
import Food from "../Pages/Food";
import Hollywood from "../Pages/Hollywood";
import Home from "../Pages/Home";
import Technology from "../Pages/Technology";
import Navbar from "../Commons/Navbar";
import Logo from "../Commons/Logo";
import TechnologyArticle from "../Pages/Technology/TechnoArticle";
import HollywoodArticle from "../Pages/Hollywood/HollyArticle";
import FitnessArticle from "../Pages/Fitness/FitnessArticle";
import FoodArticle from "../Pages/Food/FoodArticle";

const Routers =() =>{
    return(
        <div>
            <BrowserRouter>
            <Logo/>
            <Navbar />
            <Routes>
                
                {/* normal routing */}
                <Route path="/" element={<Home/>}></Route>
                <Route path="/bollywood" element={<Bollywood title="Bollywood"/>}></Route>
                <Route path="/technology" element={<Technology title="Technology"/>}></Route>
                <Route path="/hollywood" element={<Hollywood title="Hollywood"/>}></Route>
                <Route path="/fitness" element={<Fitness title="Fitness"/>}></Route>
                <Route path="/food" element={<Food title="Food"/>}></Route>

                {/* dynamic routing */}
                <Route path="/:id" element={<Home/>}></Route>
                <Route path="/bollywood/:id" element={<BollywoodArticle />}></Route>
                <Route path="/technology/:id" element={<TechnologyArticle/>}></Route>
                <Route path="/hollywood/:id" element={<HollywoodArticle/>}></Route>
                <Route path="/fitness/:id" element={<FitnessArticle/>}></Route>
                <Route path="/food/:id" element={<FoodArticle/>}></Route>


            </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routers