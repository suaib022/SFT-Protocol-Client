import { FaHeart } from "react-icons/fa";
import { FaDiscord, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import { SiCoinmarketcap } from "react-icons/si";

import { FaCheck, FaEllipsisH, FaTimes } from "react-icons/fa";

// Required packages:
// npm install react-icons daisyui tailwindcss

const tasks = [
  {
    icon: <FaXTwitter />,
    text: "Follow SFT Protocol on X",
    action: "Claim",
    points: 10,
  },
  {
    icon: <LiaTelegram />,
    text: "Follow SFT Protocol on TG",
    action: "Start",
    points: 10,
  },
  {
    icon: <FaDiscord />,
    text: "Follow SFT Protocol on DC",
    action: "Start",
    points: 10,
  },
  {
    icon: <FaLinkedin />,
    text: "Follow SFT Protocol on LinkedIn",
    action: "More",
    points: 10,
  },
  {
    icon: <SiCoinmarketcap />,
    text: "Follow SFT Protocol on CMC",
    action: "Checked",
    points: 10,
  },
  {
    icon: <FaHeart />,
    text: "React & comment X post",
    action: "Start",
    points: 10,
  },
  {
    icon: <FaHeart />,
    text: "React & comment DC post",
    action: "Start",
    points: 10,
  },
  {
    icon: <FaHeart />,
    text: "React & comment LinkedIn post",
    action: "Start",
    points: 10,
  },
];

export default function Task() {
  return (
    <div className="min-h-screen max-w-[435px] mx-auto pt-12 bg-black text-white p-4">
      {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">SFT Mini App</h1>
        <FaTimes className="cursor-pointer w-5 h-5" />
      </div> */}

      <h2 className="text-green-500 text-center pb-8 text-md font-semibold mb-1">
        Tasks
      </h2>
      <h3 className="text-2xl font-bold mb-2">SFT socials - 14</h3>
      <p className="text-sm text-gray-400 mb-4">
        Join SFT community, be aware of new and following updates, claim your
        reward in rSPD with SFT fam!
      </p>

      <div className="space-y-4">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="card bg-[#121212] border border-gray-700 text-white"
          >
            <div className="card-body flex flex-row items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{task.icon}</div>
                <div>
                  <p className="text-sm font-medium">{task.text}</p>
                  <p className="text-xs text-gray-500">+{task.points} SP</p>
                </div>
              </div>
              <div>
                {task.action === "Claim" && (
                  <button className="btn rounded-lg btn-warning text-black">
                    Claim
                  </button>
                )}
                {task.action === "Start" && (
                  <button className="btn btn-outline btn-sm text-white border-0 w-16 h-10 text-md font-bold rounded-xl bg-gray-800">
                    Start
                  </button>
                )}
                {task.action === "More" && (
                  <button className="btn btn-ghost btn-sm text-black bg-sky-500 w-14 rounded-lg">
                    <FaEllipsisH className="w-4 h-4" />
                  </button>
                )}
                {task.action === "Checked" && (
                  <button
                    className="btn text-black bg-sky-500 w-14 rounded-lg btn-ghost btn-sm "
                    disabled
                  >
                    <FaCheck className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
