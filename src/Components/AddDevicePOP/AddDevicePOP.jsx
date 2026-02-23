import { PlusIcon } from "@radix-ui/react-icons";
import { Tooltip } from "radix-ui";

const AddDevicePOP = () => {
  return (
    <>
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

export default AddDevicePOP;
