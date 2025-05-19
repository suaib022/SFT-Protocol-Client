import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const leaderboardData = [
  { id: 1, name: "J. Joseph Nahid", score: 999999 },
  { id: 2, name: "J. Joseph Nahid", score: 999999 },
  { id: 3, name: "J. Joseph Nahid", score: 999999 },
  { id: 3, name: "J. Joseph Nahid", score: 999999 },
  { id: 3, name: "J. Joseph Nahid", score: 999999 },
  { id: 3, name: "J. Joseph Nahid", score: 999999 },
  { id: 3, name: "J. Joseph Nahid", score: 999999 },
];

const Leaderboard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gradient-to-br mb-24 pb-8 from-black to-gray-900 rounded-xl flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black bg-opacity-50 rounded-2xl p-4 shadow-lg">
        <h1 className="text-center text-lg font-semibold text-cyan-400 mb-4">
          Leaderboard
        </h1>
        {leaderboardData.map((user, index) => (
          <div
            key={user.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center justify-between bg-gray border bg-opacity-5 rounded-xl px-4 py-3 mb-3 transition duration-300 ${
              hoveredIndex === index ? "ring-2 ring-cyan-400" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl  bg-opacity-10">
                <CgProfile className="h-full w-full" />
              </div>
              <div>
                <p className="text-white font-medium">{user.name}</p>
                <p className="text-gray-400 text-sm">
                  {user.score.toLocaleString()} SBT
                </p>
              </div>
            </div>
            <span className="text-white font-semibold">{user.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
