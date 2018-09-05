import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import todo from './reducers';
import { addTodo, toggleTodo } from './actions';

let store = createStore(todo);

store.dispatch(addTodo('Hello React!!!!'));
store.dispatch(addTodo('Hello Redux!!!!'));
store.dispatch(toggleTodo(0));

console.log('--------');
console.log(store.getState());
console.log('--------');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
