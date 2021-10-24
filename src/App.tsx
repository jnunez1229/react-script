import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const [number, setNumber] = useState<number>(5); //will be inferred, but just showing how it should look

  // const changeNumber = () =>{
  //   setNumber("10");
  // }

  const [people, setPeople] = useState([{
    name: "Juan Nuñez",
    url: "https://www.linkedin.com/in/juan-nunez89/",
    age: 31,
    note: "random note that I am writing for this practice"
  }])
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
    </div>
  );
}

export default App;
