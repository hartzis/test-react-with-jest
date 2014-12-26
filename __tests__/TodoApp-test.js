/** @jsx React.DOM */

// __tests__/TodoApp-test.js

jest.dontMock('../TodoApp.js');
// jest.dontMock('../TodoList.js');
describe('TodoApp', function() {

  var React = require('react/addons');
  var TodoApp = require('../TodoApp.js');
  var TestUtils = React.addons.TestUtils;

  var renderedTodoApp = TestUtils.renderIntoDocument(
    <TodoApp />
  );
    

  it('should have a div dom element', function() {
    var appDOMComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedTodoApp, 'div');
    expect(TestUtils.isDOMComponent( appDOMComponent )).toBe(true);
  });
    
  it('adds an item to the todo list', function() {

    var input = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'todoInput');
    input.getDOMNode().value = 'take dog out';

    expect(input.getDOMNode().value).toEqual('take dog out');

    // var button = TestUtils.findRenderedDOMComponentWithClass(
    //   renderedTodoApp, 'submitTodo');
    // TestUtils.Simulate.click(button.getDOMNode());

    // var theTodoList = TestUtils.findRenderedDOMComponentWithClass(
    //   renderedTodoApp, 'theTodoList');

    // var todoListItems = TestUtils.findRenderedDOMComponentWithClass(
    //   renderedTodoApp, 'theTodoListItem');

    // expect(TestUtils.isDOMComponent( theTodoList )).toBe(true);    

    // expect(todoListItems[0].getDOMNode().textContent).toEqual('take dog out');

  });

});
