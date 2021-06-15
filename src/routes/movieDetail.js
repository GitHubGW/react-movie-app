import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./Home.css";
import "./movieDetail.css";
import "../components/Movie.css";
import "../components/Navigation.css";

// 기본적으로 라우터 안에 있는(ex HashRouter, BrowserRouter 등등) 모든 라우트들은(Home, About, movieDetail) props를 가지게 된다. (Route가 아닌 Navigation은 props를 가지지 않는다.)
// react-router에 의해서 props를 가질 수 있는 것이고 props에는 아래와 같은 기본정보가 담겨있다.
// {history: {…}, location: {…}, match: {…}, staticContext: undefined}
class movieDetail extends React.Component {
  componentDidMount() {
    // movieDetail은 라우터 안에 있는 라우트이기 때문에 props를 가지고 있다.
    // 그래서 this.props를 통해 props객체를 가져올 수 있는 것이다.
    const { location, history } = this.props;
    // console.log(location);
    // console.log(history);

    // 만약 location.state가 undefined라면(location.state가 undefined면 state값이 없다는 의미) history가 가지고 있는 push()메서드를 이용해서 "/" 주소로 리다이렉트 시킨다.
    // history가 가지고 있는 push()메서드를 이용해서 다른 컴포넌트로 이동시킬 수 있다.
    // history.push({pathname: "/set_account", state: {userCell: userCell}}) 이런식으로 history.push()로 props를 넘겨줄 수도 있다.
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    // console.log(this.props);
    console.log("✅location:", location);

    // 만약 location.state가 존재하면 location.state안에 있는 값들을 가져와서 화면에 보여주고 없다면 null을 리턴한다.
    if (location.state) {
      return (
        <section className="container">
          <header className="header">
            <Link to="/">
              <h1>🎬 Movie</h1>
            </Link>
            <Navigation></Navigation>
          </header>
          <div className="movies movieDetail__container">
            <div className="movie">
              <img
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
              />
              <div className="movie__data">
                <h3 className="movie__title">{location.state.title}</h3>
                <h3 className="movie__year">({location.state.year})</h3>
                <ul className="movie__genres">
                  {location.state.genres.map((genres, index) => {
                    return (
                      <li key={index} className="movie__genres__list">
                        {genres}
                      </li>
                    );
                  })}
                </ul>
                <h3 className="movie__rating">
                  <i className="fas fa-star"></i>
                  {location.state.rating === 0
                    ? "None"
                    : location.state.rating}{" "}
                  / 10.0
                </h3>
                <h3 className="movie__summary">
                  {location.state.summary.slice(0, 300)}...
                </h3>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default movieDetail;
