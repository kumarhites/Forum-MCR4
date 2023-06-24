import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto flex">
        <SideNav />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default App;
