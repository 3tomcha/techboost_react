import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Todos extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
      {this.props.todos.map(item => <li>{item.text}</li>)}
      </ul>
    );
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {text: "仮カラム1です"},
        {text: "仮カラム2です"},
      ]
    };
  }

  handleInput = (e) => {
    this.setState({
      newtodos: {text: e.target.value}
    });
  }

  insertTodo = () => {
    const todos = this.state.todos;
    todos.push(this.state.newtodos);
    this.setState({
      todos: todos
    });
  };

  deleteTodo = () => {
    const todos = this.state.todos;
    todos.pop();
    this.setState({
      todos: todos
    });
  };

  render(){
    return(
      <div class="App">
      <Todos todos={this.state.todos} />
      <input type="text" id="todo" onChange={this.handleInput}/>
      <button onClick={this.insertTodo}>更新する</button>
      <button onClick={this.deleteTodo}>削除する</button>
      </div>
    );
  }
}

export default App;
