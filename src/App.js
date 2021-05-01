import React from "react";
// react-router-dom을 이용하면 라우터를 이용할 수 있다.
// react-router-dom에는 많은 종류의 라우터들이 있는데 그중 우리는 HashRouter(해쉬 라우터)를 사용한다.
// BrowserRouter로 해도 상관은 없지만 깃허브에 업로드할 때 조금 번거로워서 현재 여기서는 HashRouter로 한 것임
import { HashRouter, BrowserRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import movieDetail from "./routes/movieDetail";
// import Navigation from "./components/Navigation";

// 함수형 컴포넌트 App을 생성함
function App() {
  return (
    // App은 HashRouter(해쉬 라우터)를 리턴한다. 그리고 HashRouter안에는 Route(라우트)가 있다. (라우터안에 라우트들이 있는 형태이다.)
    // 라우트에는 라우트 경로로 갔을 때 보여줄 컴포넌트들을 지정해주면 된다.
    <HashRouter>
      {/* Navigation컴포넌트를 만들고 안에 라우트들간의 이동을 할 수 있는 Link를 만든다. */}
      {/* 주의할 점은 Link는 라우터 밖에서 쓸 수 없다. Link는 라우터 안에 있어야 한다. */}
      {/* (Navigation이 Link를 가지고 있기 때문에 여기서는 HashRouter밖으로 이동하면 사용 불가능하다는 의미이다.) */}
      {/* <Navigation></Navigation> */}

      {/* Route에 몇몇 props(여기서는 속성)를 지정해줄 수 있다. */}
      {/* Route의 path속성에는 라우트의 경로를 지정해주고 component에는 해당 라우트의 경로로 갔을 때 보여줄 컴포넌트를 지정해준다. */}
      {/* Route를 통해 / 경로로 들어갔을 때 Home컴포넌트를 보여주고 /about 경로로 들어갔을 때 About컴포넌트를 보여줄 수 있다. */}
      {/* exact속성을 줘야 정확하게 경로가 path 값과 동일할 때만 해당 컴포넌트를 보여준다. */}
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route paht="/movie/:id" component={movieDetail}></Route>
    </HashRouter>
  );
}

export default App;
