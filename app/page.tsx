import TopBar from "@/components/TopBar";
import ProfileCard from "@/components/ProfileCard";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="mx-auto grid h-dvh max-h-dvh max-w-[430px] grid-rows-[60px_1fr_76px] overflow-hidden bg-white">
      <TopBar />

      <div className="min-h-0 overflow-hidden">
        <ProfileCard />
      </div>

      <BottomNav />
    </div>
  );
}