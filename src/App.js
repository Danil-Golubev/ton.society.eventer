import "./App.css";
import { EventPage } from "./pages/EventPage/EventPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="main">
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route element={<MainPage />} path="/" />
              <Route element={<EventPage />} path="/event" />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
