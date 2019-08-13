import React from 'react';
import './Calculator.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class Likebutton extends React.Component {
    state = {
      count: 0
    }
  
    incrementMe = () => {
      let newCount = this.state.count + 1
      this.setState ({
        count: newCount
      })
    }
  
    decrementMe = () => {
      let newCount = this.state.count - 1
      this.setState ({
        count: newCount
      })
    }
  
    render () {
      return (
        <div className="clickValue">
          <h1 className="numberValue">{this.state.count}</h1>
          <button onClick={this.incrementMe} className="button">Increment</button>
          <button onClick={this.decrementMe} className="button">Decrement</button>
        </div>
      )
    }
  
  }
  
  // export default Likebutton;





export default Calculator;