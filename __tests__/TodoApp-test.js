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
    
  it('should add an item to the todo list', function() {

    var inputBox = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'todoInput');
    inputBox.getDOMNode().value = 'take dog out';

    TestUtils.Simulate.change(inputBox);

    expect(inputBox.getDOMNode().value).toEqual('take dog out');

    var todoForm = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'todoForm');
    TestUtils.Simulate.submit(todoForm);

    var submitTodo = TestUtils.findRenderedDOMComponentWithClass(
      renderedTodoApp, 'submitTodo');

    expect(submitTodo.getDOMNode().textContent).toEqual('Add #2');

    // var theTodoList = TestUtils.findRenderedDOMComponentWithClass(
    //   renderedTodoApp, 'theTodoList');

    // var todoListItems = TestUtils.findRenderedDOMComponentWithClass(
    //   renderedTodoApp, 'theTodoListItem');

    // expect(TestUtils.isDOMComponent( theTodoList )).toBe(true);    

    // expect(todoListItems[0].getDOMNode().textContent).toEqual('take dog out');

  });

});
