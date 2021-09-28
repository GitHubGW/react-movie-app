import React from "react";
// react-router-dom을 이용하면 라우터를 이용할 수 있다.
// react-router-dom에는 많은 종류의 라우터들이 있는데 그 중 우리는 HashRouter(해쉬 라우터)를 사용한다.
// BrowserRouter로도 할 수 있지만 깃허브에 배포했을 때 번거로운 문제점들이 있어서 HashRouter로 진행했다.
import { HashRouter, BrowserRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import movieDetail from "./routes/movieDetail";
import Navigation from "./components/Navigation";

function App() {
  return (
    // App은 HashRouter를 리턴한다. 그리고 HashRouter안에는 Route가 있다.
    // 라우터 안에 라우트 컴포넌트들이 있는 형태로 만들어줘야 한다.
    // 라우트 컴포넌트에는 해당 라우트 경로로 갔을 때 보여줄 컴포넌트를 지정해주면 된다.
    <HashRouter>
      {/* Navigation컴포넌트를 만들고 네비게이션 컴포넌트 안에는 라우트들간의 이동을 할 때 사용하는 Link컴포넌트를 만든다. */}
      {/* 주의할 점은 Link 컴포넌트는 라우터(ex: HashRouter, BrowserRouter 등) 밖에서 쓸 수 없다. Link컴포넌트는 라우터 안에 들어가야 한다. */}
      {/* Navigation이 Link를 가지고 있기 때문에 여기서는 HashRouter밖에 네비게이션 컴포넌트를 배치하면 Link컴포넌트를 사용 할 수 없다. */}
      {/* <Navigation></Navigation> */}

      {/* Route에 prop를 지정해줄 수 있다. */}
      {/* Route의 path prop에는 라우트의 경로를 지정해주고 component prop에는 해당 라우트의 경로로 갔을 때 보여줄 컴포넌트를 지정해준다. */}
      {/* Route를 통해 / 경로로 들어갔을 때 Home컴포넌트를 보여주고 /about 경로로 들어갔을 때 About컴포넌트를 보여줄 수 있다. */}
      {/* exact속성을 줘야 정확하게 경로가 path에 지정한 url과 동일할 때만 해당 컴포넌트를 보여준다. */}
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route paht="/movie/:id" component={movieDetail}></Route>
    </HashRouter>
  );
}

export default App;
