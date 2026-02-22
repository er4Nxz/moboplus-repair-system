import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Page/Home/Home";
import AddDevice from "../Page/AddDevice/AddDevice";
import Header from "../Components/Header/Header";
import { Theme } from "@radix-ui/themes";
const App = () => {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-device" element={<AddDevice />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
};

export default App;
