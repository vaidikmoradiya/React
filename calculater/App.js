import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  // const [name, setname] = useState("cdmi");
  // const [no1, setno1] = useState("");
  // const [no2, setno2] = useState("");
  // const btnhandlar = () => {
  //   var ans = parseInt(no1) + parseInt(no2);
  //   alert(ans);
  // }

  var [no1, setno1] = useState("");
  var [no2, setno2] = useState("");
  var sum = () => {
    var sum = parseInt(no1) + parseInt(no2);
    alert(sum);
  }
  var [no1, setno1] = useState("");
  var [no2, setno2] = useState("");
  var mul = () => {
    var mul = parseInt(no1) * parseInt(no2);
    alert(mul);
  }
  var [no1, setno1] = useState("");
  var [no2, setno2] = useState("");
  var div = () => {
    var div = parseInt(no1) / parseInt(no2);
    alert(div);
  }
  var [no1, setno1] = useState("");
  var [no2, setno2] = useState("");
  var sub = () => {
    var sub = parseInt(no1) - parseInt(no2);
    alert(sub);
  }
  return (
    <>
      {/* <div>
        <h1>{name}</h1>
        <h1>{name}</h1>
        <h1>{name}</h1>
        <h1>{name}</h1>
        <h1>{name}</h1>
        <h1>{name}</h1>
      </div> */}
      {/* no1<input type="text" onChange={(e) => { setno1(e.target.value) }}></input>
      no2<input type="text" onChange={(e) => { setno2(e.target.value) }}></input>
    <input type="button" value="Click Here" onClick={btnhandlar}></input> */}

      <input type="text" className="box" name="" onChange={(e) => { setno1(e.target.value) }}></input>
      <input type="text" className="box" name="" onChange={(e) => { setno2(e.target.value) }}></input>
      <br></br>
      <input type="button" name="" className="box2" value="sum" onClick={sum}></input>
      <input type="button" name="" className="box2" value="multiplication" onClick={mul}></input>
      <input type="button" name="" className="box2" value="divided" onClick={div}></input>
      <input type="button" name="" className="box2" value="sub" onClick={sub}></input>

      <input type="text" ></input>
    </>
  );
}
export default App;