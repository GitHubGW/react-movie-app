import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import "./Movie.css";

// Movie함수는 영화 정보를 가지고 있는 { id, title, summary, poster, year, rating, genres }값을 객체형태로 받아온다.
function Movie({ id, title, summary, poster, year, rating, genres }) {
  return (
    // React에서 Link태그는 ReactDOM에 의해 a태그로 변환된다. HTML의 a태그가 React의 Link처럼 변환된 것이다.
    // to속성안에 {{ }}에 추가적인 설정을 해줄 수 있다.
    // 참고: https://reactrouter.com/web/api/Link
    // Link 컴포넌트에 to를 이용해 클릭했을 때 /movie/${id} 페이지로 이동시키고, 이동시킬 때 위에서 받아온 {(id, title, summary, ...)}등의 값들을 state에 넣어서 전달해줄 수 있다.
    // 이렇게 전달해주게 되면 /movie/${id} 페이지(movieDetail)에서 state값을 받아와서 사용할 수 있는 것이다.
    // state객체는 location객체 안에 있어서 location.state로 꺼내올 수 있다.

    <Link
      to={{
        pathname: `/movie/${id}`,
        state: { id, title, summary, poster, year, rating, genres },
      }}
    >
      <Draggable>
        <div className="movie movie__item">
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h3 className="movie__year">({year})</h3>
            <ul className="movie__genres">
              {genres === undefined ? (
                <li>None</li>
              ) : (
                genres.map((genres, index) => {
                  return (
                    <li key={index} className="movie__genres__list">
                      {genres}
                    </li>
                  );
                })
              )}
            </ul>
            <h3 className="movie__rating">
              <i className="fas fa-star"></i>
              {rating === 0 ? "None" : rating} / 10.0
            </h3>
            <h3 className="movie__summary">{summary.slice(0, 120)}...</h3>
          </div>
        </div>
      </Draggable>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
