import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoItemList = () => (
  <div>
    <p>제목</p>
    {/* 기능 구현 전, 임시로 아래와 같이 작성. 기능 개발시에는 map으로 컴포넌트 반환 */}
    <ul>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </ul>
  </div>
);

export default ToDoItemList;
