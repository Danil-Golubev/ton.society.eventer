import { EventBlock } from "../../components/EventBlock/EventBlock";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { fetchEvents } from "../../api";
import { MainSkeleton } from "../../components/MainSkeleton/MainSkeleton";

export const MainPage = () => {
  const [events, setEvents] = useState([]);
  const [id, setId] = useState("");
  const eventHandler = async () => {
    const data = await fetchEvents();
    setEvents(data);
  };
  useEffect(() => {
    eventHandler();
    setId(window.Telegram.id);
    window.Telegram.WebApp.BackButton.hide();
  }, []);

  if (events.length === 0) {
    return (
      <>
        <div className={style.mainTitle}>Upcoming events {id}</div>
        <div className={style.list}>
          <MainSkeleton />
          <MainSkeleton />
          <MainSkeleton />
        </div>
      </>
    );
  }
  return (
    <>
      <div className={style.mainBlock}>
        <div className={style.mainTitle}>Upcoming events</div>
        <div className={style.list}>
          {events.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <EventBlock
              date={item.date}
              title={item.name}
              id={item.id}
              imageUrl={item.logo}
            />
          ))}
          {/* <Link to="/event">
            <EventBlock
              date="18 Oct - 20 Oct"
              title="Moscow Bootcamp Hackers League Hackathon"
            />
          </Link>
          <EventBlock
            date="18 Oct - 20 Oct"
            title="Minsk Bootcamp Hackers League Hackathon"
          /> */}
        </div>
      </div>
    </>
  );
};
