import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev){
    event.precentDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    });
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" onSubmit={(event) => this.handleSubmit(event)} />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default CreateTodo;
