import Crusine from "./Crusine";
import Homepage from "./HomePage";
import {Route,Routes, useLocation} from 'react-router-dom'; 
import Searched from "./Searched";
import Recipe from "./Receipe";
import { AnimatePresence } from "framer-motion";
function Pages(){
    const location=useLocation();
    return (
        <AnimatePresence mode="wait">        
            <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage/>}/>
             <Route path="/crusine/:type" element={<Crusine/>}/>
            <Route path="/searched/:search" element={<Searched/>}/> 
            <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
        </AnimatePresence>

    )
}

export default Pages;