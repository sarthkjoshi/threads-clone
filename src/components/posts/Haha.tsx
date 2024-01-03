"use client";
import axios from "axios";
import { useEffect } from "react";

// const getData = async () => {
//   const response = await axios.get("http://localhost:3000/api/post");
//   return response.data;
// };
function Haha() {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/api/post");
      console.log("sdf");
      console.log(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default Haha;
