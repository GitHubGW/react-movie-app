import React from "react";

// 클래스 컴포넌트인 App2을 만들고 extends 키워드를 통해 React.Component로 확장했다.
// React.Component를 extends해주게 되면 App2클래스는 React.Component(리액트 컴포넌트)가 되고 리액트 컴포넌트가 가지고 있는 모든 특징과 기능들을 가져올 수 있다.
// 클래스 컴포넌트인 App2는 함수형 컴포넌트처럼 return을 가지고 있지 않다. 왜냐하면 함수가 아니기 때문이다.
// 대신 리액트 컴포넌트로부터 가져온 render(){}메서드를 가지고 있다. 리액트는 자동으로 모든 클래스 컴포넌트의 랜더 메서드를 실행한다.
// 함수 컴포넌트를 사용하지 않고 클래스 컴포넌트를 사용하는 이유는 state를 사용하기 위해서이다.
class App2 extends React.Component {
  // constructor는 자바스크립트에서 클래스를 만들 때 호출된다. (리액트에서 온 개념은 아니다.)
  // 예를들면 컴포넌트가 마운트(생성)될 때, 컴포넌트가 스크린에 표시될 때, 컴포넌트가 웹 사이트에 갈 때등의 상황에서 constructor를 실행한다.
  // constructor()는 내부에 super()를 호출해줘야 한다. (이 내용은 추후에 다룰 예정임)
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // state에는 바꿀 데이터를 넣어준다.
  // state를 생성하고 render함수 안에서 {this.state.키값}을 통해 state값을 가져올 수 있다.
  state = {
    count: 0,
  };

  // 클래스 컴포넌트 안에서 함수를 생성할 수 있다.
  add = () => {
    // 콘솔창에 뜨는 경고창: Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.state.count = 1; 을 통해 state값을 변경하면 리액트는 state를 직접 변경하지 말고 setState()를 써서 변경하라고 경고한다.
    // this.state.count에 직접 값을 줬을 때는 동작하지 않는 이유는 리액트가 랜더 함수를 재 실행하지 않았기 때문이다.
    // 랜더함수가 재 실행이 되지 않으면 변경된 state값이 화면상에 보이지 않는다. (실제로 state값은 바뀐건 맞음)
    // 중요! 그래서 우리는 아래와 같이 setState()메서드를 통해 state값을 변경함으로써 render 함수를 재실행시켜줄 수 있다.
    // 즉, state의 값을 변경할 때마다 리액트가 랜더 함수를 refresh(재실행)시켜주도록 해주는 것이다.

    /*
    // setState()함수를 이용해서 state의 값을 재설정해준다. (랜더링할 state는 객체이기 때문에 this.setState({})형태로 {}로 묶어줬다.)
    // 리액트는 setState()를 쓰게 되면 자동으로 재랜더링해준다. (단, 리액트는 바뀐 부분만 재랜더링한다.)
    this.setState({
      // this.state.count를 통해 현재 state의 count값을 가져와서 1을 더한 후 그것을 count에 담아준다.
      // 이렇게 해도 되지만 좋은 방법은 아니다. 그 이유는 this.setState()가 수행되는 동안 this.state.count의 값이 변경될 수도 있기 때문이다.
      // 좋은 방법은 아래와 같이 current를 받아서 current.count 를 통해 현재 count정보를 가져와서 +1을 해주는 방법이다. (항상 현재의 state값을 얻을 수 있다.)
      count: this.state.count + 1,
    });
    */

    // 현재까지는 이 방법을 더 추천한다.
    // setState()함수는 콜백함수를 가질 수 있고 콜백함수는 current를 받아서 넘겨준다.
    // current에는 현재 state에 있는 값을 가져온다. ( ex: {count: 0}, {count: 1}, {count: 2} 등)
    // 가져온 {count: 0} 에서 count를 뽑아와서 +1을 해준 후 count에 재 할당해주고 그것을 리턴한다.(리턴하게 되면 이 값이 state에 들어가게 된다.)
    this.setState((current) => {
      return { count: current.count + 1 };
    });
  };

  minus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // componenet에는 여러 가지의 종류가 있다.
  // mounting: 컴포넌트가 DOM상에 새롭게 생성되는 시점에 실행된다.
  // unmounting: 컴포넌트가 DOM상에서 제거가 될 때 실행된다. (페이지를 바꾸거나 나갈 때 컴포넌트가 제거된다.)
  // updating: 컴포넌트는 state나 props값이 변경이 되면 update가 진행이 되며 다시 랜더링된다. (업데이트될 때)

  // componentDidMount는 컴포넌트가 생성될 때 실행된다. 처음 render()가 끝난 후에 실행된다.
  componentDidMount() {
    // console.log("componentDidMount");
  }

  // componentDidUpdate는 컴포넌트가 업데이트 되었을 때 (예를들면 state나 prop값 등이 업데이트 되었을 떄) 실행된다. render()가 끝난 후에 실행된다.
  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  // componentWillUnmount는 컴포넌트가 제거될 때 (페이지를 나갈 때 등) 실행된다.
  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  // 클래스 컴포넌트는 render()메서드를 통해 랜더해줘야 하고 render()메서드 안에는 return을 해줘야 한다.
  // 리액트 컴포넌트에서 사용하는 유일한 function은 render함수이다.
  render() {
    return (
      <div>
        <h1>App2 Class Component {this.state.count}</h1>
        {/* button을 만들고 리액트 컴포넌트가 기본적으로 가지고 있는 onClick이라는 prop에 위에서 만든 함수를 this를 통해 가져와서 사용한다. */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App2;
