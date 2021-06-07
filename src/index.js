// "npx create-react-app 폴더명" 을 통해 리액트 프로젝트를 초기화하고 시작할 수 있다.
// create-react-app을 하게 되면 자동으로 바벨설정부터 웹팩 등등 기본적으로 리액트를 사용할 수 있도록 세팅해준다.
import React from "react";
// react-dom은 어플리케이션을 랜더할 때 필요한 모듈이다.
// 아래에서 ReactDom에 render()함수를 통해서 컴포넌트들을 랜더하게 된다.
import ReactDOM from "react-dom";
import App from "./App";
// import Movie from "./Movie";
// import App2 from "./App2";
// import Coding from "./Coding";
// import Food from "./Food";

// react-dom은 render()메소드를 이용해서 index.html안에 있는 div#root안에 여기서 넣어줬던 컴포넌트들을 랜더해서 화면에 그려준다.
// 리액트는 컴포넌트와 함께 동작하고, 모든 것들은 컴포넌트들이다.
// 컴포넌트란 쉽게 말해 HTML를 return하는 함수이다. (이러한 자바스크립트+HTML 조합을 JSX라고 부른다.)
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Movie /> */}
    {/* <App2 /> */}
    {/* 리액트돔이 랜더링을 할 때 Coding컴포넌트에 name="kimchi" 형태로 데이터를 넘겨줄 수 있다. */}
    {/* 이렇게 컴포넌트에게 넘겨주는 데이터들을 props라고 부른다.  */}
    {/* 텍스트는 ""로 그냥 보내고(텍스트도 { " " }로 묶어서 보낼 수 있음) 나머지 자바스크립트쪽 변수들은 {}안에 묶어서 보낼 수 있다.  */}
    {/* <Coding name="kimchi1" name2={true} name3={[1, 2, 3, "hello", true]} /> */}
    {/* <Coding name="kimchi2" /> */}
    {/* <Coding name="kimchi3" /> */}
    {/* <Food /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
