import React from 'react'


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            item:''
        }
    }
  handleChanges = (e) => {
    // update state with each keystroke

    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.item);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }

    
}

export default TodoForm