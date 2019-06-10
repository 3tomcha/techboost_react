import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id: 1, text: "dataを表示する"},
        {id: 2, text: "簡単な構成を知る"}
      ]
    };
  }
  render(){
    return(
      <div class="App">
        {this.state.todos.map(item => <li>{item.text}</li>)}
      </div>
    );
  }
}

export default App;
