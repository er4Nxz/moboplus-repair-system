import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Page/Home/Home";
import AddDevice from "../Page/AddDevice/AddDevice";
import Header from "../Components/Header/Header";
const App = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-device" element={<AddDevice />} />
        </Routes>
        {state?.background && (
          <Routes>
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        )}
      </BrowserRouter>
      s
    </>
  );
};

export default App;
