import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./Home.css";
import "./About.css";
import "../components/Movie.css";
import "../components/Navigation.css";

// 기본적으로 라우터 안에 있는(ex HashRouter, BrowserRouter 등등) 모든 라우트들은(Home, About, movieDetail) props를 가지게 된다.
// react-router에 의해서 props를 가질 수 있는 것이고 props에는 정보가 담겨있다.
function About(props) {
  // console.log(props);
  return (
    <section className="container about__container">
      <header className="header">
        <Link to="/">
          <h1>🎬 Movie</h1>
        </Link>
        <Navigation></Navigation>
      </header>
      <h3>"You are what you do, not what you say you'll do."</h3>
    </section>
  );
}

export default About;
