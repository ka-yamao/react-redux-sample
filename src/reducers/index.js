import { combineReducers } from 'redux';
import todos from './todos';
var hoge = { id: 'a' };
const todoApp = combineReducers({ todos, hoge });
export default todoApp;
