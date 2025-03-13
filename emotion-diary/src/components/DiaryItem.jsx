import { getEmotionImage } from "../util/get-emotion-images";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";

import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);
  
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")) {
      onDelete(id);
      console.log(id)
    }
  };

  return (
    <div className="diaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img-section img-section-${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info-section">
        <div className="created-date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button-section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
        <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
      </div>
    </div>
  );
};

export default DiaryItem;
