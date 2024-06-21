import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";


export default function() { 
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultLayout />} />
        </Routes>
        </BrowserRouter>
    );
}