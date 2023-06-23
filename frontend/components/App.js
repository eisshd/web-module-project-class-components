import React from 'react'
import Form from './Form'
import Todo from './Todo'
import TodoList from './TodoList'

// This will hold all the data needed for this project
export default class App extends React.Component {
  constructor(){
    super()
  }

  AddItem = e => {
    const newItem = {
      name: 'Task 1',
      id: Date.now(),
      checked: false
    }
    this.setState({
      todos: [...this.state.todo, newItem]
    })
  }


  
  render() {
    return (
      <div className='App'>
        <h1>Todos:</h1>
        <div><TodoList /></div>
        <Form AddItem={this.AddItem} />
      </div>
    )
  }
}
