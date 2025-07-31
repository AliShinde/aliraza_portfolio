import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
    return (
        <>
            <Toaster />
            <HashRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={NotFound} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
