import React from 'react';

const ToDoItem = () => (
  <li className="todoapp__item">
    {/* 항목 완료 체크 / 체크 해제를 위한 체크박스 */}
    <input type="checkbox" className="todoapp__item-checkbox" />
    {/* 항목 내용 */}
    <span className="todoapp__item-ctx">ToDo Item</span>
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

export default ToDoItem;
