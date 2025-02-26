import "./DiaryList.css"
import Button from "./Button"
import DiaryItem from "../components/DiaryItem"

const DiaryList = () => {
    return (
        <div className="diaryList">
            <div className="menu-bar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button text={"새일기 쓰기"} type={"POSITIVE"} />
            </div>
            <div className="list-wrapper">
                <DiaryItem/>
            </div>
        </div>
    )
}

export default DiaryList