import React, { useEffect } from "react";
import axios from "axios";

import logo from "./logo.png";
import "./styles.css";

const Main: React.FC = () => {
  useEffect(() => {
    const callBackend = async (): Promise<void> => {
      const response = await axios.get("/api/hello");
      console.log(response.data.message);
    };
    callBackend();
  }, []);
  return (
    <div>
      <img src={logo} alt="Kickoff, Powered by PickUp" role="banner" />
      <div style={{ maxWidth: 400 }}>
        <p>
          Welcome to Kickoff - A handy starting point for full stack
          applications using Express and React. Take a look at the console to
          see a response from the backend server!
        </p>
        <p>
          To get started you can edit this file in{" "}
          <code>src/client/Main.tsx</code>
        </p>
      </div>
    </div>
  );
};

export default Main;
