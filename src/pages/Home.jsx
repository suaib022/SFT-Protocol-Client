import Leaderboard from "../components/home/Leaderboard";
import Profile from "../components/home/Profile";

const Home = () => {
  return (
    <div className="max-w-[435px] flex flex-col mx-auto justify-center pt-12">
      <Profile />
      <Leaderboard />
    </div>
  );
};

export default Home;
