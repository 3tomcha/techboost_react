import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Todo(props){
  return (
    <li>
      <input type="checkbox" onChange={props.onChange}/>
      {props.key}{props.text}
    </li>
  );
}

class Todos extends Component{
  render(){
  return(
    <ul>
    {this.props.todos.map(item =>
       <Todo key={item.id} text={item.text} onChange={()=>this.props.onChange(item.id)} />)}
    </ul>
  );
  }
}

class App extends Component{
  constructor(){
    super();
    const todos = [
      {id: 1, text: "仮カラム1です"},
      {id: 2, text: "仮カラム2です"}];

      this.state = {
        todos: todos,
        countTodo: todos.length,
        leftTodo: todos.length,
      };
    }

    handleInput = (e) => {
      this.setState({
        newtodos: {
          id: this.state.countTodo + 1,
          text: e.target.value
        },
      });
    }

    insertTodo = () => {
      const todos = this.state.todos;
      todos.push(this.state.newtodos);
      this.setState({
        todos: todos,
        countTodo: todos.length
      });
    };

    deleteTodo = () => {
      const todos = this.state.todos;
      todos.pop();
      this.setState({
        todos: todos
      });
    };

    onChangeControl = i => {
      console.log(i);
      this.setState({
        leftTodo: i,
      });
    }

    render(){
      return(
        <div class="App">
        <h1>My Todos(2/{this.state.leftTodo})</h1>
        <Todos todos={this.state.todos} onChange={(i)=>this.onChangeControl(i)}/>
        <input type="text" id="todo" onChange={this.handleInput}/>
        <button onClick={this.insertTodo}>更新する</button>
        <button onClick={this.deleteTodo}>削除する</button>
        </div>
      );
    }
  }

  export default App;
