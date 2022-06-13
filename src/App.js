import React from "react";
import Layout, { Header } from "antd/lib/layout/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

//Pages
import Home from "./pages/home";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import NewMovies from "./pages/newMovies";

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Header style={{ zIndex: 1 }}>
            <MenuTop />
          </Header>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/new-movies" exact={true} element={<NewMovies />} />
            <Route path="/popular" exact={true} element={<Popular />} />
            <Route path="/search" exact={true} element={<Search />} />
            <Route path="/movie/:id" exact={true} element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
