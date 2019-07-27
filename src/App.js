import React, { Component } from 'react';

// function App() {
//   return <h1>Hello, World!</h1>
// }

const App = () => (<Counter></Counter>)

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = { count:0 }
  }

  handlePluseButton = () =>  {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () =>  {
    this.setState({ count: this.state.count - 1 })
  }

  render(){
    return(
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePluseButton}> +1 </button>
        <button onClick={this.handleMinusButton}> -1 </button>
      </React.Fragment>
    )
  }
}

export default App;
