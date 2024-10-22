import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { EventPage } from "./pages/EventPage/EventPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { QrPage } from "./pages/QrPage/QrPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="main">
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route element={<MainPage />} path="/" />
              <Route element={<EventPage />} path="/events/:id" />
              <Route element={<QrPage />} path="/qr" />
            </Routes>
            <div className="navBarSpace"></div>
            <NavBar />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
