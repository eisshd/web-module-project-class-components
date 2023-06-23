import React from 'react'
import Todo from './Todo'

const todos = [
  {
    name: 'Walk the Dog',
    id: 1,
    checked: false
  }
]

export default class TodoList extends React.Component {
constructor(){
    super()
    this.state = {
      todos: todos
    }
  }

  render() {
    return (
      <div key={todos.id}>
        {todos.map (todo => {
          return <Todo todo={todo}/>
        })}
      </div>
    )
  }
}
