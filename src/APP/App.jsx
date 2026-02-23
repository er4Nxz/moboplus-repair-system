import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Page/Home/Home";
import AddDevice from "../Page/AddDevice/AddDevice";
import Header from "../Components/Header/Header";
import { Theme } from "@radix-ui/themes";
const App = () => {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-device" element={<AddDevice />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
