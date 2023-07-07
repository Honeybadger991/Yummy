import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import SearchResult from "./SearchResult";
import Error from "./Error";


const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:cuisine" element={<Cuisine />}/>
        <Route path="/search/:name" element={<SearchResult />}/>
        <Route path="/recipe/:id" element={<Recipe />}/>
        <Route path="/error" element={<Error />}/>
    </Routes>
  )
}

export default Pages