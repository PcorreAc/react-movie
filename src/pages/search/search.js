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
  console.log(props.history);
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //IMPLEMENTACION DEL useDebounce
  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      //Sin la condición me trae UNDEFINED
      if (s) {
        //console.log(s);
        const response = await fetch(
          `${URL_API}search/movie?api_key=${API}&languaje=es-MX&query=${s}&page=1`
        );
        const movies = await response.json();
        setSearchValue(s);
        setMovieList(movies);
      }
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h2>Busca tu película</h2>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Col>
      {movieList.results && (
        <Col span={24}>
          <Row>
            <MovieCatalog movies={movieList} />
          </Row>
        </Col>
      )}

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default withRouter(Search);
