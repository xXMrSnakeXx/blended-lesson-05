import { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Convert from "./pages/Convert";
import { useDispatch } from "react-redux";
import { fetchCurrensyPosition } from "./redux/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position?.coords?.latitude;
        const long = position?.coords?.longitude;
        dispatch(fetchCurrensyPosition({ lat, long }));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/convert" element={<Convert />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
