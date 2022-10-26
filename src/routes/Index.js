import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedIn from "../pages/LoggedIn";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { SIGNINROUTE, SIGNUPROUTE, LOGGEDINROUTE } from "./Route";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path={LOGGEDINROUTE} element={<LoggedIn />} />
        <Route path={SIGNUPROUTE} element={<SignUp />} />
        <Route path={SIGNINROUTE} element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Index;
