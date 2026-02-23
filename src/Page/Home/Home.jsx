import useFetch from "../../Hooks/UseFetch/useFetch";
import {  useNavigate } from "react-router-dom";
import AddDevicePOP from "../../Components/AddDevicePOP/AddDevicePOP";
import Item from "./Item/Item";

const Home = () => {
  const { data, error, loading } = useFetch("http://localhost:3001/Devices")

  return (
    <>
      {loading && (
        <div className="w-full h-screen flex items-center justify-center">
          Loading ...
        </div>
      )}
      {error && (
        <div className="w-full h-screen flex items-center justify-center">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      )}
      <h1 className="text-3xl font-bold text-center my-4">Devices List</h1>
      <div className=" my-4 shadow-lg rounded-2xl p-10 bg-gray-100 w-[70%] mx-auto">
        {data?.map((device) => {
          return <Item key={device.id} device={device} />;
        })}
      </div>
      <AddDevicePOP />
    </>
  );
};

export default Home;
