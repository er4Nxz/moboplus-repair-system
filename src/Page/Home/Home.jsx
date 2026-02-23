import useFetch from "../../Hooks/UseFetch/useFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddDevicePOP from "../../Components/AddDevicePOP/AddDevicePOP";
import Item from "./Item/Item";

const Home = () => {
  const { data, error, loading } = useFetch("http://localhost:3001/Devices");

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const filterFetch = data?.filter((device) => {
    if (searchTerm === "") return true;
    return (
      device.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.customerNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.device.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  });

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
        {filterFetch?.map((device) => {
          return <Item key={device.id} device={device} />;
        })}
      </div>
      <AddDevicePOP />
    </>
  );
};

export default Home;
