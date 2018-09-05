import React from 'react';
import PropTypes from 'prop-types';
const Todo = ({ completed, text }) => (
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </li>
);

// 入力チェック
Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
