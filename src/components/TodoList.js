import React, {Component} from 'react'
import '../styles/TodoList.css'
import TodoListItem from './TodoListItem'
import PropTypes from 'prop-types'

class TodoList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let items = this.props.items.map((currentValue,index,array) => {
      return(
        <TodoListItem name={currentValue} key={index}/>
      )
    })
    return (
      <div className="TodoList">
         <ul>
            {items}
         </ul>
      </div>
  );
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired
}

export default TodoList;
