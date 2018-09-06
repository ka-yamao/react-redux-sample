import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import todo from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
// import { setVisibilityFilter } from './actions';

let store = createStore(todo);

console.log('--------');
console.log(store.getState());
console.log('--------');

store.dispatch(addTodo('Hello React!!!!'));
store.dispatch(addTodo('Hello Redux!!!!'));
store.dispatch(addTodo('Hello Hoge!!!!'));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

console.log('--------');
console.log(store.getState());
console.log('--------');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
