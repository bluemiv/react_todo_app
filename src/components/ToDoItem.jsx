import React from 'react';

const ToDoItem = () => (
  <li>
    {/* 항목 완료 체크 / 체크 해제를 위한 체크박스 */}
    <input type="checkbox" />
    {/* 항목 내용 */}
    <span>ToDo Item</span>
    {/* 수정 버튼 */}
    <button type="button">수정</button>
    {/* 삭제 버튼 */}
    <button type="button">삭제</button>
  </li>
);

export default ToDoItem;
