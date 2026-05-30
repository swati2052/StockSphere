import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/verify`,
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
        } else {
          setUsername(data.user);
          toast(`Welcome ${data.user}`, {
            position: "top-right",
          });
        }
      } catch (err) {
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
      }
    };
    verifyUser();
  }, []);

  return (
    <>
      <TopBar username={username} />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
