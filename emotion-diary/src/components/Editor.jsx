import "./Editor.css";

import EmotionItem from "./EmotionItem";
import Button from "./Button";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constant";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // input은 문자열로 반환되어 전달된다.
    // 문자열로 전달된 값을 Date 객체로 변환하여 날짜와 관련된 연산을 할 수 있다.
    if (name == "createdDate") {
      value = new Date(value);
    }

    setInput({ ...input, [name]: value });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="editor">
      <section className="date-section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          type="date"
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className="emotion-section">
        <h4>오늘의 감정</h4>
        <div className="emotion-list-wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          id=""
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button-section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
