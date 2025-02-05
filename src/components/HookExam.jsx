// hook 관련 팁
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다.(반복문, 조건문에서 사용불가)
// 3. 나만의 훅(custom hook) 제작 가능

import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <input type="text" value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
