import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-images";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`emotionItem ${
        isSelected ? `EmotionItem-on-${emotionId}` : ""
      }`}
    >
      <img className="emotion-img" src={getEmotionImage(emotionId)} />
      <div className="emotion-name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
