import TopBar from "@/components/TopBar";
import DemoQrCard from "@/components/DemoQrCard";
import BottomNav from "@/components/BottomNav";

export default function Verify() {
  return (
    <div className="max-w-[430px] mx-auto bg-white min-h-screen">
      <TopBar showBack />
      <DemoQrCard />
      <BottomNav />
    </div>
  );
}