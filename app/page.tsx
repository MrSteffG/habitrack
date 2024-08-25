import Habits from "./components/Habits";

export default function Home() {
  return (
    <div className="mt-20 flex h-full w-full flex-col items-center justify-center gap-10">
      <Habits />
    </div>
  );
}
