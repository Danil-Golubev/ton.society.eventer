import style from "./style.module.css";
export const EventBlock = ({ date, title, imageUrl, id }) => {
  return (
    <>
      <div className={style.mainBlock}>
        {/* <img src="public/images/1.png" alt="bootkemp"></img> */}
        <div className={style.imageBlock}></div>
        <div className={style.textBlock}>
          <div className={style.date}>{date}</div>
          <div className={style.title}>{title}</div>
        </div>
      </div>
    </>
  );
};
