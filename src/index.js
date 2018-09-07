import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import todo from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
// import { setVisibilityFilter } from './actions';
import store, { persistor } from './configureStore';

// let store = createStore(todo);

// console.log('--------');
// console.log(store.getState());
// console.log('--------');

// store.dispatch(addTodo('Hello React!!!!'));
// store.dispatch(addTodo('Hello Redux!!!!'));
// store.dispatch(addTodo('Hello Hoge!!!!'));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

console.log('--------');
// console.log(store.getState());
console.log('--------');

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
