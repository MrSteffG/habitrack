import Functionality from "./components/Functionality";
import Navbar from "./components/Navbar";
import Habits from "./components/Habits";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-10">
      <Navbar />
      <Functionality />
      <Habits />
    </div>
  );
}
