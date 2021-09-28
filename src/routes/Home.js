import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import "./Home.css";
import "../components/Movie.css";
import "../components/Navigation.css";
import Navigation from "../components/Navigation";

// 영화 API 주소: https://yts.mx/api#movie_details
// API를 가져올 주소를 설정해준다.
// 주소 가장 맨 끝에 Endpoint Parameters를 추가해서 그 파라미터에 따른 json데이터를 가져올 수 있다.
// 예를들어 json뒤에 ?sort_by=rating를 쓰게 되면 데이터를 가져올 때 rating(평점) 순으로 정렬해서 가져오도록 해준 것이다.
// rating대신 year나 다른 것들을 쓰면 그 속성에 따른 정렬 방식으로 json데이터를 기져오는 것이다.
// const URL = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=genres";
const URL = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating";

class Home extends React.Component {
  /*
  constructor() {
    console.log("constructor");
    super();
  }
  */

  state = {
    isLoading: true,
    movies: [],
  };

  // componentDidMount는 랜더가 끝난 후에 실행한다.
  // componentDidMount안에 setTimeout을 이용해 일정 시간후에 state의 값을 바뀌도록 컨트롤 했다.
  // 주의할 점은 setState()는 constructor()에서는 사용하면 에러가 난다.
  // 왜냐하면 setState()는 마운트가 끝난 후(=컴포넌트가 생성된 후) 컨트롤이 가능하기 떄문이다.
  async componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 2000);

    // axios를 이용해 GET방식으로 변수 URL의 주소로 API를 요청한다.
    // axios를 사용할 때는 async await를 통해 동기 처리를 한 번 해줘야 한다.
    const response = await axios.get(URL);

    // axios에서 받은 정보를 데이터를 이용해서 movies배열을 가져왔다.
    const {
      data: {
        data: { movies },
      },
    } = response;

    this.setState({ movies: movies, isLoading: false });
  }

  render() {
    // this.state에서 isLoading과 movies를 뽑아온다.
    const { isLoading, movies } = this.state;

    // map()메서드의 괄호안에 인자로 들어갈 mapMovie함수를 생성한다.
    // map()메서드를 이용해서 movie데이터를 하나하나 뽑아와서 Movie컴포넌트에 넘겨준다 (map메서드를 쓸 때 return은 필수로 써줘야한다.)                                                                                                                                                                                                                                                                                                                                                                                                                                   ................................................................//////////////////////////.........................................................................................................................................................................................................................................
    function mapMovie(movies) {
      return (
        <Movie
          key={movies.id}
          id={movies.id}
          title={movies.title}
          summary={movies.summary}
          year={movies.year}
          rating={movies.rating}
          poster={movies.medium_cover_image}
          genres={movies.genres}
        />
      );
    }

    return (
      <section className="container">
        {isLoading === false ? (
          <header className="header">
            <Link to="/">
              <h1>🎬 Movie</h1>
            </Link>
            <Navigation></Navigation>
          </header>
        ) : (
          <header></header>
        )}
        {/* Loading 텍스트 대신에 아래와 같이 html태그들을 ()로 묶어서 사용할 수 있다.  */}
        {isLoading ? (
          <div className="loading-bar">
            <span></span>
            <span></span>
            <span></span>
            <h2>Loading. . .</h2>
          </div>
        ) : (
          <div className="movies">{movies.map(mapMovie)}</div>
        )}
        {isLoading === false ? (
          <footer className="footer">
            <div className="footer__icon__container">
              <div className="footer__icon">
                <img src="https://d1telmomo28umc.cloudfront.net/media/public/badges/react_nsNvyE0.png" alt="react"></img>
              </div>
              <div className="footer__icon">
                <img src="https://d1telmomo28umc.cloudfront.net/media/public/badges/es6.png" alt="es6"></img>
              </div>
            </div>
            <span className="footer__text">&copy; {new Date().getFullYear()} GW. All rights reserved.</span>
          </footer>
        ) : (
          <footer></footer>
        )}
      </section>
    );
  }
}

export default Home;
