import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  const email="cdmi@gmail.com";
  const arr=[10,20,30,40,50,60,70,80,90,100]
  const obj = [
    { name: "CDMI1", email: "cdmi1@gmail.com", age: "121" },
    { name: "CDMI2", email: "cdmi2@gmail.com", age: "122" },
    { name: "CDMI3", email: "cdmi3@gmail.com", age: "123" },
    { name: "CDMI4", email: "cdmi4@gmail.com", age: "124" },
    { name: "CDMI5", email: "cdmi5@gmail.com", age: "125" },
    { name: "CDMI6", email: "cdmi6@gmail.com", age: "126" },
    { name: "CDMI7", email: "cdmi7@gmail.com", age: "127" },
    { name: "CDMI8", email: "cdmi8@gmail.com", age: "128" },
  ]

  return (
    <div className="App">

      <Home name="CDMI" email={email}/>

      <ul>
        {
          arr.map((item,i)=>{
            return(
              <li>{i}={item}</li>
            )
          })
        }
      </ul>

      <div>
        {
          obj.map((item)=>{
            return(
              <About name={item.name} email={item.email} age={item.age}/>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
