import { EventBlock } from "../../components/EventBlock/EventBlock";
import style from "./style.module.css";
import { Link } from "react-router-dom";
export const MainPage = () => {
  window.Telegram.WebApp.BackButton.hide();
  return (
    <>
      <div className={style.mainBlock}>
        <div className={style.mainTitle}>Upcoming events</div>
        <div className={style.list}>
          <Link to="/event">
            <EventBlock
              date="18 Oct - 20 Oct"
              title="Moscow Bootcamp Hackers League Hackathon"
            />
          </Link>
          <EventBlock
            date="18 Oct - 20 Oct"
            title="Minsk Bootcamp Hackers League Hackathon"
          />
        </div>
      </div>
    </>
  );
};
