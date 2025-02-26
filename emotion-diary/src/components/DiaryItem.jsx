import { getEmotionImage } from "../util/get-emotion-images";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

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
      </div>
    </div>
  );
};

export default DiaryItem;
