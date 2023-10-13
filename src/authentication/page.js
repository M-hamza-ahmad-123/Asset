import React from "react";
import { Login } from "./login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import { Signup } from "./signup";
import MainPage from "../main/mainPage";

export const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/mainpage" element={<MainPage></MainPage>} />
      </Routes>
    </BrowserRouter>
  );
};
