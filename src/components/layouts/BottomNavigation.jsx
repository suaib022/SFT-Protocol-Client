import { GoHome } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { PiHandWithdrawBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-5 z-50 w-full">
      <div className="mx-auto max-w-md  bg-gray-800 shadow-md rounded-full px-6 py-3 flex justify-between items-center text-white">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <GoHome
            className={`h-6 w-6 ${
              currentPath === "/" ? "text-blue-500" : "white"
            }`}
          />
          <span
            className={`text-sm font-semibold mt-1 ${
              currentPath === "/" ? "text-blue-500" : "white"
            }`}
          >
            Home
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/tasks")}
        >
          <FaTasks
            className={`h-6 w-6 ${
              currentPath === "/tasks" ? "text-blue-500" : "white"
            }`}
          />
          <span
            className={`text-sm font-semibold mt-1 ${
              currentPath === "/tasks" ? "text-blue-500" : "white"
            }`}
          >
            Tasks
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/withdraw")}
        >
          <PiHandWithdrawBold
            className={`h-6 w-6 ${
              currentPath === "/withdraw" ? "text-blue-500" : "white"
            }`}
          />
          <span
            className={`text-sm font-semibold mt-1 ${
              currentPath === "/withdraw" ? "text-blue-500" : "white"
            }`}
          >
            Withdraw
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
