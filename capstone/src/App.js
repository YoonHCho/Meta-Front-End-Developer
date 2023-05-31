import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
import ConfirmRes from "./pages/ConfirmRes";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME, ABOUT, MENU, RESERVATION, ORDER ONLINE LOGIN */}
          <Route path="/" element={<SharedPage />}>
            {/* the index will always match the path="/" */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reserve" element={<Reserve />} />
            <Route path="reserve-confirm" element={<ConfirmRes />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
