import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl" />
      </div>
    </div>
  );
}

export default Loading;
