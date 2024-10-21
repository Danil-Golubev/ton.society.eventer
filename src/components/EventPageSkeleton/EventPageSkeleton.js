import style from "./style.module.css";

export const EventPageSkeleton = () => {
  return (
    <>
      <div className={style.contentBlock}>
        <div className={style.mainBlock}>
          <div className={style.imageBlock} />
          <div className={style.textBlock}>
            <div className={style.date} />
            <div className={style.title} />
            <div className={style.prizePool} />
          </div>
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.description} />
        </div>
      </div>
    </>
  );
};
