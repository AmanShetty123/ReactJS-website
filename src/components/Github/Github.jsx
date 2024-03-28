import React from "react";
import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github Followers:
    </div>
  );
};

export default Github;
