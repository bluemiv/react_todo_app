import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoItemList = ({ todoList }) => (
  <div className="todoapp__list">
    <p className="todoapp__list-tit">제목</p>
    {/* 기능 구현 전, 임시로 아래와 같이 작성. 기능 개발시에는 map으로 컴포넌트 반환 */}
    <ul className="todoapp__list-ul">
      {todoList && // todoList가 있을때만 출력
        todoList.map((todoItem) => (
          <ToDoItem key={todoItem.id} todoItem={todoItem} />
        ))}
    </ul>
  </div>
);

ToDoItemList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default ToDoItemList;
