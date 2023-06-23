import React from 'react'
import TodoList from './TodoList'


export default class Todo extends React.Component {
  render() {
    return (
      <div>
        {this.props.todo.name}
      </div>
    )
  }
}
