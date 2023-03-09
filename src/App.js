/** @format */

import "./App.css";
import SearchMovie from "./components/SearchMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WishList from "./components/WishList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchMovie />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/moviedetails/:title" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
