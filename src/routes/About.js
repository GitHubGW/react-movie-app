import React from "react";

// 기본적으로 라우터 안에 있는(ex HashRouter, BrowserRouter 등등) 모든 라우트들은(Home, About, movieDetail) props를 가지게 된다.
// react-router에 의해서 props를 가질 수 있는 것이고 props에는 정보가 담겨있다.
function About(props) {
  // console.log(props);
  return <div>This is About Page!</div>;
}

export default About;
