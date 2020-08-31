import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasksData = [
  {
    name:"Abdi",
    id:12345,
    completed:false,
    emoji: ''
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      tasks: tasksData,
      toggleItem: () => {},
    }
  }
  toggleItem = id => {
    console.log(id);
    // Update tasks on our state object
    // use this.setState
    // loop through the arr
    // find which element we clicked update the "pruchased" property
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
            emoji: '✔️'

          };
        } else {
         return item
        }
      })
    });
  };


  addTask = (taskName) => {
    const newTask ={
      name: taskName,
      id:  Date.now(),
      completed: false,
      
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })

  }
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <div>
           <TodoList
            tasks={this.state.tasks}
            toggleItem={this.toggleItem}

        />
        </div>
       <button onClick={this.clearCompleted}> CLEAR</button>
      </div>
    );
  }
}

export default App;
