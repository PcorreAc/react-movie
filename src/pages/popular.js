import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../utils/contants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";
import Pagination from "../components/Pagination";

function Popular() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}movie/popular?api_key=${API}&language=es-MX&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Películas Populares
        </h1>
      </Col>
      {movieList.results ? (
        <>
          <Col span={24}>
            <Row>
              <MovieCatalog movies={movieList} />
            </Row>
          </Col>
          <Col span={24}>
            <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </>
      ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default Popular;
