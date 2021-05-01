import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import "./Movie.css";

// 영화 API 주소: https://yts.mx/api#movie_details
// API를 가져올 주소를 설정해준다.
// 주소 가장 맨 끝에 Endpoint Parameters를 추가해서 그 파라미터에 따른 Json데이터를 가져올 수 있다.
// 예를들어 json뒤에 ?sort_by=rating를 썼는데 이것은 rating(평점) 순으로 정렬하려고 써준 것이다.
// rating대신 year나 다른 것들을 쓰면 그 속성에 따른 정렬 방식으로 json데이터를 기져오는 것이다.
const URL = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=year";

class App extends React.Component {
  constructor() {
    // console.log("constructor");
    super();
  }

  state = {
    isLoading: true,
    movies: [],
  };

  // componentDidMount는 랜더가 끝난 후에 실행한다.
  // componentDidMount안에 setTimeout을 이용해 일정 시간후에 state의 값을 바뀌도록 컨트롤 했다.
  // 주의할 점은 setState()는 constructor()에서는 사용하면 에러가 난다.
  // 왜냐하면 setState()는 마운트가 끝난 후(=컴포넌트가 생성된 후) 컨트롤이 가능하기 떄문이다.
  async componentDidMount() {
    // console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 2000);

    // axios를 이용해 GET방식으로 URL변수를 가진 주소로 API를 요청한다.
    // axios는 async await를 통해 동기 처리를 한 번 해줘야 한다.
    const response = await axios.get(URL);

    // axios에서 받은 정보를 데이터를 이용해서 movies배열을 가져왔다.
    const {
      data: {
        data: { movies },
      },
    } = response;
    // console.log(movies);

    this.setState({ movies: movies, isLoading: false });
  }

  render() {
    // console.log("render");

    // this.state에서 isLoading과 movies를 뽑아온다.
    const { isLoading, movies } = this.state;

    // map()메서드를 돌릴 mapMovie함수를 생성함
    // map()메서드를 이용해서 Movie컴포넌트에 데이터를 넘겨줌 (map()메서드를 쓸 때 return은 필수임)                                                                                                                                                                                                                                                                                                                                                                                                                                   ................................................................//////////////////////////.........................................................................................................................................................................................................................................
    function mapMovie(movies) {
      // console.log("movies", movies);
      // return console.log("✅movies", movies.title);
      return <Movie key={movies.id} id={movies.id} title={movies.title} summary={movies.summary} year={movies.year} rating={movies.rating} poster={movies.medium_cover_image} genres={movies.genres} />;
    }

    return (
      <section className="container">
        {/* <h1>App</h1> */}
        {/* {}안에는 자바스크립트를 쓸 수 있고 자바스크립트의 삼항연산자를 이용해 조건문을 만들어줬다.  */}
        {/* isLoading이 true인지 false인지 검사해서 true면 "Loading.."을 false면 movies에 map()메서드를 돌린 결과를 가져온다. */}
        {/* Loading 텍스트 대신에 아래와 같이 html태그들을 ()로 묶어서 사용할 수 있다.  */}
        {/* <h2>{isLoading ? "Loading..." : "We are ready"}</h2> */}
        {isLoading ? (
          <div class="loading-bar">
            <span></span>
            <span></span>
            <span></span>
            <h2>Loading. . .</h2>
          </div>
        ) : (
          <div className="movies">{movies.map(mapMovie)}</div>
        )}

        {/* <Movie title={movies.title} summary={movies.summary} year={movies.title} rating={movies.title} /> */}
      </section>
    );
  }
}

export default App;
