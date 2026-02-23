import { TrashIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Link } from "react-router-dom";

const Delete = ({ id }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/Devices/${id}`);
  };
  return (
    <>
      <Link
        onClick={() => {
          handleDelete();
        }}
        className="flex justify-center items-center text-sm bg-[#e5484d] hover:bg-[#ce4449] text-white px-2 py-1 rounded-md cursor-pointer"
      >
        Delete
        <TrashIcon className="ml-2 inline-block" />
      </Link>
    </>
  );
};

export default Delete;
