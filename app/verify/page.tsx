import TopBar from "@/components/TopBar";
import DemoQrCard from "@/components/DemoQrCard";
import BottomNav from "@/components/BottomNav";

export default function Verify() {
  return (
    <div className="mx-auto min-h-[100dvh] w-full max-w-[430px] overflow-x-hidden bg-white">
      <TopBar showBack />
      <DemoQrCard />
      <BottomNav />
    </div>
  );
}