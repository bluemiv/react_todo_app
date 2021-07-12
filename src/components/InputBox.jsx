import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ todoItemList, setTodoItemList }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  // input 값 가져오기
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    // todoItemList에 값 추가
    setTodoItemList(todoItemList.concat(text));

    // input 값 초기화 및 포커싱
    setText('');
    inputRef.current.focus();
  };

  //   // 디버깅을 위해 출력하여 확인
  //   useEffect(() => {
  //     console.log(todoItemList);
  //   }, [todoItemList]);

  return (
    <div className="todoapp__inputbox">
      {/* 항목 내용 입력 input */}
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        className="todoapp__inputbox-inp"
        onChange={onChangeInput}
      />
      {/* 입력 후 항목 추가 버튼 */}
      <button
        type="submit"
        className="todoapp__inputbox-add-btn"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </div>
  );
};

// props 값 검증
InputBox.propTypes = {
  todoItemList: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTodoItemList: PropTypes.func.isRequired,
};

export default InputBox;
