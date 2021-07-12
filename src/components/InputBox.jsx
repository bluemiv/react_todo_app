import React from 'react';

const InputBox = () => (
  <div className="todoapp__inputbox">
    {/* 항목 내용 입력 input */}
    <input
      type="text"
      name="todoItem"
      placeholder="할 일을 입력해주세요"
      className="todoapp__inputbox-inp"
    />
    {/* 입력 후 항목 추가 버튼 */}
    <button type="submit" className="todoapp__inputbox-add-btn">
      추가
    </button>
  </div>
);

export default InputBox;
