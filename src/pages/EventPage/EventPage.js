import style from "./style.module.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEvent } from "../../api";
import { EventPageSkeleton } from "../../components/EventPageSkeleton/EventPageSkeleton";
export const EventPage = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({});
  const { id } = useParams();

  const eventHandler = async (id) => {
    const data = await fetchEvent(id);
    setEvent(data);
  };

  useEffect(() => {
    eventHandler(id);
    // Показать нативную кнопку "Назад" в Telegram Web App
    window.Telegram.WebApp.BackButton.show();
    // Обработчик события при нажатии на кнопку "Назад"
    window.Telegram.WebApp.BackButton.onClick(() => {
      navigate(-1);
    });
  }, [id, navigate]);

  if (event.length === 0) {
    return (
      <>
        <EventPageSkeleton />
      </>
    );
  }
  return (
    <>
      <div className={style.contentBlock}>
        <div className={style.mainBlock}>
          {/* <img src="public/images/1.png" alt="bootkemp"></img> */}
          <img
            className={style.imageBlock}
            src={event.logo}
            alt={event.name}
          ></img>
          <div className={style.textBlock}>
            <div className={style.date}>{event.date}</div>
            <div className={style.title}>{event.name}</div>

            <div className={style.prizePool}>{event.subDescription}</div>
          </div>
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.description}>{event.description}</div>
        </div>
        <a href={event.url} className={style.button}>
          <img className={style.icon} src="/images/apply.png" alt="button" />
          <div className={style.buttonText}>Подать заявку на участие</div>
        </a>
        <Link to="/">
          <div className={style.button2}>
            <img
              className={style.icon}
              src="/images/listBlue.png"
              alt="button"
            />
            <div className={style.buttonText2}>Программа мероприятия</div>
          </div>
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/tonsocietycishub"
          className={style.button2}
        >
          <img
            className={style.icon}
            src="/images/speakBlue.png"
            alt="button"
          />

          <div className={style.buttonText2}>
            <div>Новости комьюнити</div>
          </div>
        </a>
      </div>
    </>
  );
};
