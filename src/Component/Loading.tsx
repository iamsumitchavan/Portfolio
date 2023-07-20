import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-black p-10">
      <AiOutlineLoading3Quarters className="text-2xl animate-spin" />
    </div>
  );
};

export default Loading;
