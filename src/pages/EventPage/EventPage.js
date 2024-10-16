import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const EventPage = () => {
  const navigate = useNavigate();
  // Показать нативную кнопку "Назад" в Telegram Web App
  window.Telegram.WebApp.BackButton.show();
  // Обработчик события при нажатии на кнопку "Назад"
  window.Telegram.WebApp.BackButton.onClick(() => {
    navigate(-1);
  });

  return (
    <>
      <div className={style.contentBlock}>
        <div className={style.mainBlock}>
          {/* <img src="public/images/1.png" alt="bootkemp"></img> */}
          <div className={style.imageBlock}></div>
          <div className={style.textBlock}>
            <div className={style.date}>18 Oct - 20 Oct"</div>
            <div className={style.title}>
              Moscow Bootcamp Hackers League Hackathon
            </div>

            <div className={style.prizePool}>PITCH. BUILD. GROW. WIN.</div>
          </div>
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.description}>
            Welcome to the Hackers League Bootcamps! <br />
            ​​Get ready for 19 events worldwide, offering full immersion into
            TON ecosystem with workshops, lectures, and entertainment
            activities. The top teams at each bootcamp will share a $5000 prize
            pool and receive a fast track to the Hackers League Hackathon. Each
            bootcamp will conclude with a wrap-up party to celebrate the
            experience. A more detailed agenda will be shared soon. Stay tuned
            for updates! About Hackers League Hackathon TON Society is
            announcing Hackers League — an ecosystem-wide winter competition for
            early stage founders that will begin in October.
          </div>
        </div>
      </div>
    </>
  );
};
