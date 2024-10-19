import style from "./style.module.css";

export const MainSkeleton = () => {
  return (
    <>
      <div className={style.mainBlock}>
        <div className={style.imageBlock}></div>
        <div className={style.textBlock}>
          <div className={style.date}></div>
          <div className={style.title}></div>
        </div>
      </div>
    </>
  );
};
