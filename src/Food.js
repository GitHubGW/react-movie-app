// // prop-types 모듈은 내가 전달받은 props가 내가 원하는 props인지 체크해주고 에러를 알려주는 모듈이다.(npm install prop-types로 설치하기)
// import PropTypes from "prop-types";

// const foodList = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image: "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 5.5,
//   },
// ];

// // 아래와는 다른 방법: 아래에서 전달받은 foodName이라는 props를 이용해서 item객체 값을 받아온다.
// // function GetFood({foodName}){}
// function GetFood({ foodname, foodimage, foodrating }) {
//   return (
//     <div>
//       <h2>GetFood</h2>
//       {/* {console.log(foodName.name)} */}
//       {/* {console.log(foodName.image)} */}
//       {/* <h2>Name: {foodName.name}</h2> */}
//       {/* <img src={foodName.image} alt={foodName.name} /> */}
//       {/* <h3>Rating: {foodName.rating} / 5.0</h3> */}

//       <h3>{foodname}</h3>
//       <img src={foodimage} alt={foodname} />
//       <h4>{foodrating}</h4>
//     </div>
//   );
// }

// // GetFood.propTypes{}를 이용해서 GetFood이 받는 props 데이터에 대한 규칙을 지정해준다. (propTypes는 이름 변경 불가함)
// // 아래와 같이 규칙을 지정해주면 props에 내가 원하는 props만 체크해서 가져올 수 있다.
// // 다양한 규칙을 체크할 수 있다. -> 값이 있는지 없는지, true인지 false인지, 타입은 어떤건지, 객체가 있는지 없는지 등등
// 주의! GetFood.propTypes={}는 GetFood함수 뒤에 와야 한다.(앞에 오면 초기화하기 전이라 불러올 수 없다는 오류를 띄운다.)
// GetFood.propTypes = {
//   // 위에서 설치한 PropTypes모듈을 이용해서 foodList가 가지고 있는 객체들에게 규칙을 지정해준다.
//   // PropTypes.string.isRequired: PropTypes모듈을 이용할 것이고 타입은 string을 받을 것이고 isRequired(값이 꼭 있도록) 할 것이다. (isRequired는 필수 옵션은 아님)
//   foodname: PropTypes.string.isRequired,
//   foodimage: PropTypes.string.isRequired,
//   // 만약 이렇게 쓰면 콘솔창에 PropTypes가 에러를 보여준다.
//   // 왜냐하면 foodrating에는 prop값으로 숫자를 받았는데 사용자가 string을 규칙으로 설정해놨기 때문이다. 그래서 아래와 같이 number로 고쳐줬다.
//   // foodrating: PropTypes.string.isRequired
//   foodrating: PropTypes.number,
// };

// // renderFood함수는 foodList를 map()메서드를 돌리면서 배열안에 값을 차례로 food에 받아오게 된다.
// // 그리고 renderFood함수 return에 <GetFood foodName={food}/>을 통해 위에서 받은 food을 GetName컴포넌트에 foodName으로 넘겨준다.
// function renderFood(food) {
//   // console.log(food);

//   // React에서는 각각의 컴포넌트들은 유일해야 한다. (리액트 컴포넌트는 내부적으로 key prop가 필요함)
//   // 그렇기 때문에 위에서 객체 생성시 서로 다른 id값을 주고 그 id값을 key라고 하는 props에 넣어서 보내줘서 각각의 컴포넌트들을 유일하게 만들어준다.
//   // 그냥 key prop에 유일한 값을 넣어서 보내주기만 하면 key prop가 없다는 오류는 뜨지 않는다.
//   // key prop는 실제로 사용되진 않는다. 그냥 리액트 내부에서 사용하기 위함이다. (주의! key 이름은 바꾸면 안 됨)
//   // return <GetFood key={food.id} foodName={food}/>
//   // foodname에는 food객체안에 name을 foodimage에는 food객체안에 image를 넣어서 보낸다.
//   return <GetFood key={food.id} foodname={food.name} foodimage={food.image} foodrating={food.rating} />;
// }

// function Food() {
//   return (
//     <div>
//       <h1>✅ Food</h1>
//       {/* 자바스크립트를 사용하고 싶다면 { }안에 사용할 수 있다. */}
//       {/* map()메서드를 이용해서 배열에서 값을 가져와서 값에 무언가를 추가해서 새로운 배열을 return할 수 있다. */}
//       {/* 주의! map()메서드는 return값으로 새로운 배열을 반환한다. */}
//       {/* {foodList.map((item)=>{
//         // console.log(item);

//         // GetFood 컴포넌트로 foodName이라는 props로 item객체를 전달해줬다.
//         // 만약 foodName에 {item}이 아닌 {item.name}을 전달해주면 위에서 받을 때 {foodName}으로 받으면 되고
//         // foodName에는 item.name값이 할당되서 들어가게 되서 바로 그냥 foodName으로 사용할 수 있다.
//         return <GetFood foodName={item} />;
//       })} */}

//       {/* foodList배열에 map()메서드를 이용해서 renderFood함수를 실행한다. (위의 코드를 다시 깔끔하게 바꿈) */}
//       {foodList.map(renderFood)}

//       {/* 아래를 콘솔로그로 찍으면 이상한 값이 나오는데 아래는 renderFood함수가 리턴하는 GetFood컴포넌트를 foodList 배열로 가져온 것을 의미한다. */}
//       {/* [ <GetFood foodName={food} />, <GetFood foodName={food} />, <GetFood foodName={food} /> ] 이런식으로 들어있는 배열이다.  */}
//       {/* {console.log(foodList.map(renderFood))} */}
//     </div>
//   );
// }

// export default Food;
