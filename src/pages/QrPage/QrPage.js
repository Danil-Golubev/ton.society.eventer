// import style from "./style.module.css";
import React, { useEffect, useState } from "react";
export const QrPage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Инициализация WebApp
    window.Telegram.WebApp.ready();

    // Получение данных пользователя
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

    if (initDataUnsafe && initDataUnsafe.user && initDataUnsafe.user.username) {
      setUsername(initDataUnsafe.user.username); // Установка username в состояние
    } else {
      setUsername("Username не установлен"); // Если username отсутствует
    }
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      <div>
        <p>Username: {username}</p> {/* Вывод username в div */}
      </div>
    </div>
  );
};
