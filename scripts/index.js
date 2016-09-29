import React from 'react'
import ReactDOM from 'react-dom'

var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['call mom', 'swim', 'eat lunch', 'smile']};
  },
  handleAdd: function() {
    var newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map((item, i) => {
      return (
        <li key={item}>{item}</li>
      );
    });
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});
ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
