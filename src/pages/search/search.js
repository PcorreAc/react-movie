import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { useNavigate, useLocation } from "react-router";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/contants";
import "./search.scss";

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    const location = useLocation();
    return <Component history={history} location={location} {...props} />;
  };
  return Wrapper;
};

function Search(props) {
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      const response = await fetch(
        `${URL_API}search/movie?api_key=${API}&languaje=es-MX&query=${s}&page=1`
      );
      const movies = await response.json();
      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search]);
  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu película</h1>
        <Input value={searchValue} />
        {movieList.results && (
          <Row>
            <Col span={24}>
              <MovieCatalog movies={movieList} />
            </Col>
          </Row>
        )}
        <Col span={24}>
          <Footer />
        </Col>
      </Col>
    </Row>
  );
}

export default withRouter(Search);
