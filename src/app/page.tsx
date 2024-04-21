"use client";

import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios
      .get("https://brapi.dev/api/quote/PETR4", {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      })
      .then((res) => console.log("response", res))
      .catch((err) => console.error("Houve um erro", err));
  }, []);

  useEffect(() => {
    console.log('Env', process.env);
  }, [process.env]);
  return (
    <div>
      <h1>Project made with Docker</h1>
    </div>
  );
};

export default Home;
