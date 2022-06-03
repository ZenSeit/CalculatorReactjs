import "./App.css";
import logoSen from "./images/sensei.png";
import Button from "./components/Button";
import Screen from './components/Screen';
import ClearBtn from "./components/ClearBtn";
import {useState} from 'react';
import {evaluate} from 'mathjs';
import Logo from "./components/Logo";
 
function App() {

const [input,setInput] = useState('');



const addInput = val => {
 setInput(input+val);
};

const getResult = () => {
  if(input) setInput(evaluate(input))
  else alert("Type a value to calculate.");
};



  return (
    <div className="App">
      <Logo 
      logoimg={logoSen} 
      name={"Senzei"}/>
      <div className="calculator-container">
        <Screen input={input}/>
        <div className="row">
          <Button handleClick={addInput} >1</Button>
          <Button handleClick={addInput} >2</Button>
          <Button handleClick={addInput} >3</Button>
          <Button handleClick={addInput} >+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput} >4</Button>
          <Button handleClick={addInput} >5</Button>
          <Button handleClick={addInput} >6</Button>
          <Button handleClick={addInput} >-</Button>
        </div> 
        <div className="row">
          <Button handleClick={addInput} >7</Button>
          <Button handleClick={addInput} >8</Button>
          <Button handleClick={addInput} >9</Button>
          <Button handleClick={addInput} >*</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput} >0</Button>
          <Button handleClick={addInput} >.</Button>
          <Button handleClick={getResult}>=</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearBtn handleClick={()=>setInput('')}>Clear</ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
