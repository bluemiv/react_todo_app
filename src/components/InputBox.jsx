import React from 'react';

const InputBox = () => (
  <div>
    {/* 항목 내용 입력 input */}
    <input type="text" name="todoItem" />
    {/* 입력 후 항목 추가 버튼 */}
    <button type="submit">추가</button>
  </div>
);

export default InputBox;
