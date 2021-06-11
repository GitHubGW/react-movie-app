import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    // 아래와 같이 a태그를 이용해서 리액트에서 페이지를 이동하게 되면 페이지를 이동할 때마다 새로고침을 하게 된다.
    // 왜냐하면 a태그는 HTML 태그이기 때문이다.
    // 그래서 페이지 이동시 새로고침을 하지 않기 위해 a태그가 아닌 react-router-dom이 가지고 있는 Link를 가져와서 사용한다.
    <div className="navigation">
      {/* <a href="/">Home</a> */}
      {/* <a href="/about">About</a> */}
      {/* react-router-dom에서 가져온 Link컴포넌트와 Link컴포넌트가 가지고 있는 to 속성을 이용해서 리액트에서 라우트들간의 이동을 할 수 있다.  */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
