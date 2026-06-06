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
          `${"https://stocksphere-z675.onrender.com"}/verify`,
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          window.location.href = `${"https://stock-sphere-kbz9.vercel.app"}/login`;
        } else {
          setUsername(data.user);
          toast(`Welcome ${data.user}`, {
            position: "top-right",
          });
        }
      } catch (err) {
        window.location.href = `${"https://stock-sphere-kbz9.vercel.app"}/login`;
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
