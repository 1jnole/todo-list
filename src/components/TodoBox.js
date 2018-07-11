import React, {Component} from 'react';
import '../styles/TodoBox.css';
import propTypes from 'prop-types'
//Input y boton

class TodoBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault(); //para que no se propague
    this.props.onSubmit(e); //Llamada la metodo del parent
  }

  getInputValue(){
    return this.state.todoText;
  }

  render() {
    return (<div className="TodoBox">
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.todoText} onChange={(e) =>{this.setState({todoText: e.target.value})}}/>
        <input type="submit" value="Add"/>
      </form>
    </div>);
  }
}

//Indicar que propiedas va  recibir este componnente child (on submit del padre)
TodoBox.propTypes = {
    onSubmit: propTypes.func.isRequired
}

export default TodoBox;
