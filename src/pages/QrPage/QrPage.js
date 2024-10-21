import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Импорт компонента для QR-кода

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
      setUsername("Username не установлен");
    }
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      <div>
        <p>Username: {username}</p> {/* Отображаем username */}
        {username !== "Username не установлен" && (
          <QRCodeCanvas value={username} size={256} /> // Генерация QR-кода
        )}
      </div>
    </div>
  );
};
