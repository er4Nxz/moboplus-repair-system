import { Tooltip } from "radix-ui";
import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons";
import useFetch from "../../Hooks/UseFetch/useFetch";
import { Link, useNavigate } from "react-router-dom";
import Delete from "./Delete/Delete";

const Home = () => {
  const { data, error, loading } = useFetch("http://localhost:3001/Devices");
  const navigate = useNavigate();
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
          return (
            <div
              key={device.id}
              className="mb-4 p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors relative"
            >
              <div className="flex items-center">
                {/* information */}
                <div className="flex flex-col gap-2 flex-2">
                  <h4 className="text-2xl">
                    {device.device}
                    <div className="inline text-[10px] border border-gray-300 rounded-2xl py-2 px-3 w-fit mx-4">
                      #{device.id}
                    </div>
                  </h4>
                  <p className="text-gray-600 ">
                    <span className="font-semibold">Name :</span>{" "}
                    {device.customerName} <br /> {device.customerNumber}
                  </p>
                </div>
                {/* problem */}
                <div className="flex flex-col gap-2 border-l-2 border-gray-300 px-4 flex-3">
                  <p className="text-gray-600 text-wrap">
                    <span className="font-semibold">Problem :</span>{" "}
                    {device.problem}
                  </p>
                  <p className="text-gray-600 text-wrap">
                    <span className="font-semibold">Description :</span>{" "}
                    {device.description}
                  </p>
                </div>
                {/* status */}
                <div className="flex flex-col gap-2 border-l-2 border-gray-300 px-4 flex-1">
                  <p className="text-gray-600 text-wrap">
                    <span className="font-semibold">Status :</span>{" "}
                    {device.status ? (
                      <span className="text-[#22889e] bg-[#def7f9] px-1.25 py-0.5 rounded-sm font-semibold">
                        Completed
                      </span>
                    ) : (
                      <span className="text-[#d51b61] bg-[#ffe9f0] px-1.25 py-0.5 rounded-sm font-semibold">
                        Pending
                      </span>
                    )}
                  </p>
                  <p className="text-gray-600 text-wrap">
                    <span className="font-semibold">Date :</span> {device.date}
                  </p>
                </div>
                {/* actions */}
                <div className="flex flex-col gap-2 border-l-2 border-gray-300 px-4 flex-0.5">
                  <div className="flex gap-2 mx-auto">
                    <Link
                      to={`/edit/${device.id}`}
                      className="flex justify-center items-center text-sm bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md cursor-pointer"
                    >
                      Edit
                      <Pencil2Icon className="ml-2 inline-block" />
                    </Link>
                    <Delete id={device.id} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => navigate("/add-device")}
              className="inline-flex size-15 items-center justify-center rounded-full bg-white shadow-[0_0_10px_1px] outline-0  cursor-pointer shadow-gray-300 hover:shadow-gray-400 transition-shadow duration-200 m-10 fixed bottom-0 right-0"
            >
              <PlusIcon width={24} height={24} className="text-gray-600" />
            </button>
          </Tooltip.Trigger>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};

export default Home;
