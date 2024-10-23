    import {createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom";
import OurModel from "../Pages/Suv";

import Sedan from "../Pages/Sedan";
import Suv from "../Pages/Suv";
import Electric from "../Pages/Electric";
import { NavBar } from "../NaveBar";


export const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<NavBar />}>
        <Route path="/OurModel"element={<OurModel/>}/>
        <Route path="Sedan"element={<Sedan/>}/>
        <Route path="Suv"element={<Suv/>}/>
        <Route path="Electric"element={<Electric/>}/>

    </Route>
));
