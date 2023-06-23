import React from 'react'
import TodoList from './TodoList';

export default class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      item: ''
    };
  }

  handleChange = e => {
    e.preventDefault()
    console.log('typing')
  };

  hideCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('submitted')
    this.props.AddItem()
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input
          type='text'
          value={this.state.item}
          name='item'
          onChange={this.handleChange}
        />
        <button>Submit</button>
        <br/>
        <br/>
        <button onClick={this.hideCompleted}>Hide Completed</button>
      </form>
    )
  }
}
