import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/dashboard" element={<div>Dashboard</div>} />
            </Routes>
        </BrowserRouter>
    )
}