// 원래는 리액트에서 아래와 같이 JSX형태의 컴포넌트를 사용하려면 React를 import해줘야 했지만 최신 React에서는 아마도 생략가능하게 바뀐 거 같다.
// import React from "react";

// Coding이라는 함수형 컴포넌트를 만들었다. (컴포넌트는 일종의 html을 반환하는 함수이다.)
// 아래는 자바스크립트 함수 + HTML의 조합으로, 리액트의 JSX개념이다.
// Coding컴포넌트는 index.js에서 랜더링할 때 리액트가 넘겨준 데이터들을 함수의 인자로 받아올 수 있다.
// props를 콘솔창에 찍어보면 넘겨준 데이터들을 객체 형태로 받아온 것을 확인할 수 있다.
// function Coding(props){}를 통해 데이터를 받아올 수 있다.
// props객체안에 있는 프로퍼티를 아래와 같이 {name}형태로 꺼내서 return안에서 바로 쓸 수도 있다.
function Coding({ name }) {
  return <h1>✅ Coding {name}</h1>;
}

export default Coding;
