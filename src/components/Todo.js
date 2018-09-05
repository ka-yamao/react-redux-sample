import React from 'react';
import PropTypes from 'prop-types';
const Todo = ({ text }) => <li>{text}</li>;

// 入力チェック
Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
