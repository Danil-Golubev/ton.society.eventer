import style from "./style.module.css";
import { Link } from "react-router-dom";
export const EventBlock = ({ date, title, imageUrl, id }) => {
  console.log(imageUrl);
  return (
    <>
      <Link to={`/events/${id}`}>
        <div className={style.mainBlock}>
          <div className={style.imageBlock}>
            <img className={style.image} src={imageUrl} alt="bootkemp" />
          </div>
          <div className={style.textBlock}>
            <div className={style.date}>{date}</div>
            <div className={style.title}>{title}</div>
          </div>
        </div>
      </Link>
    </>
  );
};
