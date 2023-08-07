import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Works from "./pages/Works";
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<LandingPage/>}/>
        <Route path='/Blog'  element={<Blog/>}/>
        <Route path='/Works'  element={<Works/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
