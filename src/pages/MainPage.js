import { EventBlock } from "../components/EventBlock/EventBlock";
import style from "./style.module.css";
export const MainPage = () => {
  return (
    <>
      <div className={style.mainBlock}>
        <div className={style.mainTitle}>Upcoming events</div>
        <div className={style.list}>
          <EventBlock />
          <EventBlock />
          <EventBlock />
        </div>
      </div>
    </>
  );
};
