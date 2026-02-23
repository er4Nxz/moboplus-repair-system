import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";

const AddDevice = () => {
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [device, setDevice] = useState("");
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("fa-IR-u-nu-latn"));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const PostDevice = async () => {
      try {
        await axios.post("http://localhost:3001/Devices", {
          customerName,
          customerNumber,
          device,
          problem,
          description,
          status,
          date,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    PostDevice().then(() => navigate("/"));
  };

  return (
    <>
      <button
        className="m-4 absolute flex justify-center items-center cursor-pointer border border-gray-300 rounded-md px-3 py-1 bg-white shadow hover:bg-gray-50 transition-colors"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="inline mr-1" />
        Back
      </button>

      <div className="w-full min-h-[90vh] bg-gray-100 pt-10">
        <div className="shadow-lg rounded-2xl p-10 bg-white w-full max-w-xl border border-gray-200 mx-auto">
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-700">
            Add New Device
          </h1>
          <form
            action="#"
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-gray-500 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white placeholder-gray-400"
                placeholder="Customer Name"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="number" className="text-sm text-gray-500 mb-1">
                Number
              </label>
              <input
                type="text"
                id="number"
                value={customerNumber}
                onChange={(e) => setCustomerNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white placeholder-gray-400"
                placeholder="Customer Phone Number"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="device" className="text-sm text-gray-500 mb-1">
                Device
              </label>
              <input
                type="text"
                id="device"
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white placeholder-gray-400"
                placeholder="Device Name"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="problem" className="text-sm text-gray-500 mb-1">
                Problem
              </label>
              <input
                type="text"
                id="problem"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white placeholder-gray-400"
                placeholder="Problem Device"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="description"
                className="text-sm text-gray-500 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white placeholder-gray-400 resize-none"
                placeholder="Description of the problem..."
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow transition-colors"
            >
              Add Device
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDevice;
