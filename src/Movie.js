import React from "react";
import PropTypes from "prop-types";
import "./Movie";

// Movie컴포넌트가 받을 props에 대한 규칙을 설정해준다.
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// 만약 state를 사용한다면 class 컴포넌트를 만들어야 하지만(나중에 react hook을 배우면 꼭 클래스 컴포넌트가 없어도 됨) state를 사용하지 않는다면 굳이 class 컴포넌트를 만들 필요는 없다.
// 그냥 function 컴포넌트로 만들어주면 된다.
function Movie({ title, summary, poster, year, rating, genres }) {
  return (
    <div className="movie">
      {/* App.js에서 보낸 데이터들을 받아서 JSX로 화면에 뿌려줌 */}
      {/* <h1>Movie</h1> */}
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        {/* 리액트에서 html안에서 자바스크립트를 쓰려면 {{}}로 묶어주고 안에 쓸 수 있다. (자주 쓰진 않지만 참고용으로 알아두기)  */}
        {/* <h3 class="movie__title" style={{ backgroundColor: "red" }}> */}
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {/* map에 있는 각각의 item은 key가 필요하다. 하지만 우리는 여기서 줄 키가 없다.  */}
          {/* map()메서드는 첫 번쨰 인자외에 두 번째 인자로 argument를 준다. argument에는 숫자가 들어간다.  */}
          {genres.map((genres, index) => {
            return (
              <li key={index} className="movie__genres__list">
                {genres}
              </li>
            );
          })}
        </ul>
        <h3 className="movie__year">{year}</h3>
        <h3 className="movie__rating">{rating === 0 ? "None" : rating} / 10.0</h3>
        <h3 className="movie__summary">{summary.slice(0, 150)}...</h3>
      </div>
    </div>
  );
}

export default Movie;
