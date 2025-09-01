import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import { Toaster } from "@/components/ui/toaster.jsx";

function App() {
  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
