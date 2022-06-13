import React from "react";
//Styles
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";

//API
import { URL_API, API } from "../utils/contants";

//Components
import SliderMovies from "../components/SliderMovies/SliderMovies";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

function Home() {
  const newMovies = useFetch(
    `${URL_API}movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  const topRatedMovies = useFetch(
    `${URL_API}movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );
  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Peliculas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList title="Top Ranking" movies={topRatedMovies} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Home;
