import { FaCheck } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const platforms = ["@twitter", "@discord", "@cmc", "@linkedin"];

const Profile = () => {
  return (
    <div className=" bg-[#0b0f17] text-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-md font-semibold text-teal-400 ">Profile</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="w-12 h-12 rounded-full bg-gray-400">
              <CgProfile className="w-full h-full text-black" />
            </div>
            <div>
              <p className="font-semibold text-lg">Name</p>
              <p className="text-sm text-gray-400">@username999</p>
            </div>
          </div>
        </div>
        <button className="px-4 py-1 border border-gray-400 rounded-md text-sm hover:bg-gray-700">
          Edit
        </button>
      </div>

      <div className="space-y-3 mt-4">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-2 bg-[#1c2230] rounded-md"
          >
            <span className="text-gray-300">{platform}</span>
            <div className="w-5 h-5 border-2 border-yellow-400 rounded-sm flex items-center justify-center">
              <FaCheck className="text-yellow-400 text-xs" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
