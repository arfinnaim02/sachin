"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileCard() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white px-6 pb-32 pt-8">
      <div className="flex justify-center">
        <div className="relative">
          <div className="rounded-full bg-blue-100 p-3 shadow-[0_0_42px_rgba(102,139,216,0.55)]">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={220}
              height={220}
              priority
              className="h-[220px] w-[220px] rounded-full object-cover"
            />
          </div>

          <div className="absolute bottom-2 right-[-25px] h-[92px] w-[92px]">
            <span className="demo-blink-ring"></span>

            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-[#ff1c6e] text-[22px] font-black lowercase text-white">
              frank
            </div>
          </div>
        </div>
      </div>

      <section className="mt-9">
        <h1 className="text-[29px] font-black leading-tight tracking-tight text-gray-950">
          Miraj Shochin
        </h1>

        <p className="mt-5 text-[20px] text-gray-900">06-11-2000</p>

        <div className="mt-8 border-y border-gray-300 py-7">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-[20px] leading-tight text-gray-900">
                Karelia-ammattikorkeakoulu
              </p>
              <p className="text-[20px] leading-tight text-gray-900">
                Degree-Student
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/plus.png"
                alt="plus"
                width={42}
                height={42}
                className="h-[42px] w-[42px] object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300 text-[22px] font-bold text-gray-950">
              ✓
            </span>
            <span className="text-[18px] text-gray-900">Valid</span>
          </div>

          <h2 className="mt-4 text-[22px] font-black leading-tight tracking-tight text-gray-950">
            Valid until 30.09.2026
          </h2>
        </div>

        <button
          onClick={() => router.push("/verify")}
          className="mt-10 w-full rounded-full bg-[#668bd8] py-5 text-[14px] font-bold text-white shadow-sm transition active:scale-[0.99]"
        >
          Student Card Verification
        </button>
      </section>
    </main>
  );
}