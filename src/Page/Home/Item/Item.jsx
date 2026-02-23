import { Pencil2Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import Delete from "../Delete/Delete";
import { useState } from "react";
import axios from "axios";

const Item = ({ device }) => {
  const [checked, setChecked] = useState(device.status);

  const handleStatus = async (e) => {
    const newStatus = e.target.checked;
    setChecked(newStatus);
    try {
      await axios.put(`http://localhost:3001/Devices/${device.id}`, {
        ...device,
        status: newStatus,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
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
            <span className="font-semibold">Name :</span> {device.customerName}{" "}
            <br /> {device.customerNumber}
          </p>
        </div>
        {/* problem */}
        <div className="flex flex-col gap-2 border-l-2 border-gray-300 px-4 flex-3">
          <p className="text-gray-600 text-wrap">
            <span className="font-semibold">Problem :</span> {device.problem}
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
            {checked ? (
              <>
                <label
                  htmlFor={`status-${device.id}`}
                  className="text-[#22889e] bg-[#def7f9] px-1.25 py-0.5 rounded-sm font-semibold cursor-pointer hover:bg-[#cde3e6] transition"
                  style={{ fontSize: 14 }}
                >
                  Completed
                </label>
                <input
                  type="checkbox"
                  id={`status-${device.id}`}
                  checked={checked}
                  onChange={handleStatus}
                  className="hidden"
                />
              </>
            ) : (
              <>
                <label
                  htmlFor={`status-${device.id}`}
                  className="text-[#d51b61] bg-[#ffe9f0] hover:bg-[#e7ced6] px-1.25 py-0.5 rounded-sm font-semibold cursor-pointer"
                  style={{ fontSize: 14 }}
                >
                  Pending
                </label>
                <input
                  type="checkbox"
                  id={`status-${device.id}`}
                  checked={checked}
                  onChange={handleStatus}
                  className="hidden"
                />
              </>
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
};

export default Item;
