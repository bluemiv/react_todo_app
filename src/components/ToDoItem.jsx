import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ todoItem }) => (
  <li className="todoapp__item">
    {/* 항목 완료 체크 / 체크 해제를 위한 체크박스 */}
    <input type="checkbox" className="todoapp__item-checkbox" />
    {/* 항목 내용 */}
    <span className="todoapp__item-ctx">{todoItem.text}</span>
    {/* 수정 버튼 */}
    <button type="button" className="todoapp__item-edit-btn">
      ✏
    </button>
    {/* 삭제 버튼 */}
    <button type="button" className="todoapp__item-delete-btn">
      🗑
    </button>
  </li>
);

ToDoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
};

export default ToDoItem;
