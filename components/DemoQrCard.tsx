"use client";

import Image from "next/image";

export default function DemoQrCard() {
  return (
    <main className="w-full bg-white px-7 pb-32 pt-6">
      <div className="flex justify-center">
        <div className="rounded-xl bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
          <Image
            src="/qr.png"
            alt="QR Code"
            width={225}
            height={225}
            priority
            className="h-auto w-full max-w-[225px] object-contain"
          />
        </div>
      </div>

      <section className="mt-10">
        <h1 className="text-[22px] font-black text-gray-900">
          2025 - 2026
        </h1>

        <div className="mt-5 border-y border-gray-300 py-5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-300 text-[17px] font-bold text-gray-950">
              ✓
            </span>

            <span className="text-[14px] text-gray-700">Valid</span>
          </div>

          <p className="mt-3 text-[16px] font-medium text-gray-900">
            Valid until 30.09.2026
          </p>
        </div>

        <div className="mt-28 flex w-full items-center justify-center gap-4 min-[380px]:gap-8">
          <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <Image src="/vr.png" alt="VR" width={46} height={28} />
          </div>

          <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <Image
              src="/matkahuolto.png"
              alt="Matkahuolto"
              width={50}
              height={32}
            />
          </div>

          <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <Image src="/kela.png" alt="Kela" width={48} height={30} />
          </div>
        </div>
      </section>
    </main>
  );
}