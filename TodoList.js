/** @jsx React.DOM */

// TodoList.js

var React = require('react/addons');

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

module.exports = TodoList;