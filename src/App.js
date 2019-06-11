import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {text: "dataを表示する"},
        {text: "簡単な構成を知る"}
      ]
    };
  }

  handleInput = (e) => {
    this.setState({
      newtodos: {text: e.target.value}
    });
    console.log(this.state.newtodos);
  }

  insertTodo = () => {
    const temp = this.state.todos;
    temp.push(this.state.newtodos);
    this.setState({
      todos: temp
    });
  };

  render(){
    return(
      <div class="App">
      <ul>
      {this.state.todos.map(item => <li>{item.text}</li>)}
      </ul>
      <input type="text" id="todo" onChange={this.handleInput}/>
      <button onClick={this.insertTodo}>更新する</button>
      </div>
    );
  }
}

export default App;
