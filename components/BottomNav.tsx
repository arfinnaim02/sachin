import { Bell, IdCard, Menu, Search } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 bg-white border-t h-[90px]">
      <div className="grid grid-cols-4 h-full items-center text-center text-[13px]">

        {/* Discounts */}
        <div className="flex flex-col items-center justify-center text-gray-500">
          <Search size={24} />
          <p className="mt-1">Discounts</p>
        </div>

        {/* Active: Student Card */}
        <div className="flex flex-col items-center justify-center text-black font-semibold">
          <IdCard size={26} />

          <p className="relative mt-1">
            Student Card
            <span className="absolute left-1/2 -bottom-[2px] h-[2px] w-[55%] -translate-x-1/2 rounded-full bg-[#ff1c6e]"></span>
          </p>
        </div>

        {/* Messages */}
        <div className="flex flex-col items-center justify-center text-gray-500">
          <Bell size={24} />
          <p className="mt-1">Messages</p>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center justify-center text-gray-500">
          <Menu size={26} />
          <p className="mt-1">Menu</p>
        </div>

      </div>
    </div>
  );
}