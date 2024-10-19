import style from "./style.module.css";

export const EventPageSkeleton = () => {
  return (
    <>
      <div className={style.contentBlock}>
        <div className={style.mainBlock}>
          <div className={style.imageBlock}></div>
          <div className={style.textBlock}>
            <div className={style.date}></div>
            <div className={style.title}></div>

            <div className={style.prizePool}></div>
          </div>
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.description}></div>
        </div>
      </div>
    </>
  );
};
