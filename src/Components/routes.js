import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"
import LoginPage from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Delivery from "./Pages/Delivery"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginPage/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/delivery" element={<Delivery/>}></Route>  
            </Routes>
        </BrowserRouter>
    )
}