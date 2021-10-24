import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

interface IState{
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {
  // const [number, setNumber] = useState<number>(5); //will be inferred, but just showing how it should look

  // const changeNumber = () =>{
  //   setNumber("10");
  // }

  const [people, setPeople] = useState<IState["people"]>([])

  // people.map(person => {
  //   person.age = 10
  // })
  
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
