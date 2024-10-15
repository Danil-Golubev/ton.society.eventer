import style from "./style.module.css";
export const EventBlock = () => {
  return (
    <>
      <div className={style.mainBlock}>
        {/* <img src="public/images/1.png" alt="bootkemp"></img> */}
        <div className={style.imageBlock}></div>
        <div className={style.textBlock}>
          <div className={style.date}>18 Oct - 20 Oct</div>
          <div className={style.title}>
            Moscow Bootcamp Hackers League Hackathon
          </div>
        </div>
      </div>
    </>
  );
};
