/** @jsx React.DOM */

// __tests__/TodoApp-test.js

jest.dontMock('../TodoApp.js');
describe('TodoApp', function() {
  it('adds an item to the todo list', function() {
    var React = require('react/addons');
    var TodoApp = require('../TodoApp.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var todoApp = TestUtils.renderIntoDocument(
      <TodoApp />
    );

    var appDOMComponent = TestUtils.findRenderedDOMComponentWithTag(
    	todoApp, 'div');
    expect(TestUtils.isDOMComponent( appDOMComponent )).toBe(true);


    // // Verify that it's Off by default
    // var label = TestUtils.findRenderedDOMComponentWithTag(
    //   checkbox, 'label');
    // expect(label.getDOMNode().textContent).toEqual('Off');

    // // Simulate a click and verify that it is now On
    // var input = TestUtils.findRenderedDOMComponentWithTag(
    //   checkbox, 'input');
    // TestUtils.Simulate.change(input);
    // expect(label.getDOMNode().textContent).toEqual('On');
  });
});
