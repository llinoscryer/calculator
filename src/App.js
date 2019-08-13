import React from 'react';
import logo from './logo.svg';
import './App.css';
import { rootCertificates } from 'tls';

class Calculator extends React.Component {
  state = {
      count: [] 
  }

  clickButton = (num) => {
    let currentCount = this.state.count
    this.setState({ count:  [ currentCount, num ]})
  }

  render () {
      return (
          <div className="calculator">
              <h1 className="resultsScreen">{this.state.count}</h1>
              <button className="inputButton" id="number7" onClick={() => this.clickButton('7')}>7</button>
              <button className="inputButton" id="number8" onClick={() => this.clickButton('8')}>8</button>
              <button className="inputButton" id="number9" onClick={() => this.clickButton('9')}>9</button>
              <button className="inputButton" id="divide" onClick={() => this.clickButton('/')}>/</button>
              <button className="inputButton" id="number4" onClick={() => this.clickButton('4')}>4</button>
              <button className="inputButton" id="number5" onClick={() => this.clickButton('5')}>5</button>
              <button className="inputButton" id="number6" onClick={() => this.clickButton('6')}>6</button>
              <button className="inputButton" id="multiply" onClick={() => this.clickButton('*')}>*</button>
              <button className="inputButton" id="number1" onClick={() => this.clickButton('1')}>1</button>
              <button className="inputButton" id="number2" onClick={() => this.clickButton('2')}>2</button>
              <button className="inputButton" id="number3" onClick={() => this.clickButton('3')}>3</button>
              <button className="inputButton" id="minus" onClick={() => this.clickButton('-')}>-</button>
              <button className="inputButton" id="number0" onClick={() => this.clickButton('0')}>0</button>
              <button className="inputButton" id="equals">=</button>
              <button className="inputButton" id="clear">CLEAR</button>
              <button className="inputButton" id="plus" onClick={() => this.clickButton('+')}>+</button>
          </div>
      )
  }
}

// why have I made separate class components for Calculator and Keypad? /
// how do I make the buttons interact? /
// do I need to declare input and output? /
// where would setState come in to this? /

// const Numbers = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// class Keypad extends React.Component {
//   handleClick = () => {

//   }


//   render () {
//     return (
//       <div>
//       <Numbers number="0"/>,
//       <Numbers number="1"/>,
//       <Numbers number="2"/>,
//       <Numbers number="3"/>,
//       <Numbers number="4"/>,
//       <Numbers number="5"/>,
//       <Numbers number="6"/>,
//       <Numbers number="7"/>,
//       <Numbers number="8"/>,
//       <Numbers number="9"/>,
//       </div>
//     )
//   }
// }





export default Calculator;