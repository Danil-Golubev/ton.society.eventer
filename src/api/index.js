import axios from "axios";

export const fetchEvents = async () => {
  const data = await axios.get("https://goton2024.azurewebsites.net/events");
  return data.data;
};

export const fetchEvent = async (id) => {
  const data = await axios.get(
    `https://goton2024.azurewebsites.net/events/${id}`
  );
  return data.data;
};
