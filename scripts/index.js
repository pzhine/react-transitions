import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: ['call mom', 'swim', 'eat lunch', 'smile'],
      completed: []
    };
  },
  handleAdd: function() {
    var newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleClick: function(i) {
    this.setState({completed: this.state.completed.concat(i)})
  },
  render: function() {
    var items = this.state.items.map((item, i) => {
      return (
        <li key={item} onClick={this.handleClick.bind(this, i)}>
          {item}
          <ReactCSSTransitionGroup transitionName="todoDone">
            {this.state.completed.includes(i) ? (<p>Done</p>) : null}
          </ReactCSSTransitionGroup>
        </li>
      );
    });
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ul>
          <ReactCSSTransitionGroup transitionName="todoItem">
            {items}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
});
ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
