import React from "react";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import "./MovieCatalog.scss";
import { EyeOutlined } from "@ant-design/icons";

function MovieCatalog(props) {
  const {
    movies: { results },
  } = props;
  return results.map((movie) => (
    <Col key={movie.id} span={4} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
}

export default MovieCatalog;

function MovieCard(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={title}
            src={posterPath}
            actions={[<EyeOutlined key="eye" />]}
          />
        }
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}
