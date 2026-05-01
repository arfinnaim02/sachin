"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileCard() {
  const router = useRouter();

  return (
    <main className="flex h-full flex-col overflow-hidden bg-white px-6 pb-3 pt-3">
      <div className="flex shrink-0 justify-center">
        <div className="relative">
          <div className="rounded-full bg-blue-100 p-2.5 shadow-[0_0_36px_rgba(102,139,216,0.5)]">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={155}
              height={155}
              priority
              className="h-[155px] w-[155px] rounded-full object-cover"
            />
          </div>

          <div className="absolute bottom-1 right-[-16px] h-[66px] w-[66px]">
            <span className="demo-blink-ring"></span>

            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-[#ff1c6e] text-[15px] font-black lowercase text-white">
              frank
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8 min-h-0 shrink">
        <h1 className="text-[25px] font-black leading-tight tracking-tight text-gray-950">
          Miraj Shochin
        </h1>

        <p className="mt-1.5 text-[16px] text-gray-900">06-11-2000</p>

        <div className="mt-3 border-y border-gray-300 py-2.5">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-[16px] leading-tight text-gray-900">
                Karelia-ammattikorkeakoulu
              </p>
              <p className="text-[16px] leading-tight text-gray-900">
                Degree-Student
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/plus.png"
                alt="plus"
                width={34}
                height={34}
                className="h-[34px] w-[34px] object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300 text-[18px] font-bold text-gray-950">
              ✓
            </span>
            <span className="text-[16px] text-gray-900">Valid</span>
          </div>

          <h2 className="mt-1.5 text-[19px] font-black leading-tight tracking-tight text-gray-950">
            Valid until 30.09.2026
          </h2>
        </div>

        <button
          onClick={() => router.push("/verify")}
          className="mt-4 w-full rounded-full bg-[#668bd8] py-3 text-[14px] font-bold text-white shadow-sm transition active:scale-[0.99]"
        >
          Student Card Verification
        </button>
      </section>
    </main>
  );
}