import axios from "axios";

const getData = async () => {
  const response = await axios.get("http://localhost:3000/api/post");
  return await response.data;
};
async function Ha() {
  const data = await getData();
  console.log("lelo", data);
  return <div></div>;
}

export default Ha;
