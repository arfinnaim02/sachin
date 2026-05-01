"use client";

type Props = {
  title?: string;
  showBack?: boolean;
};

export default function TopBar({ title = "Student Card", showBack = false }: Props) {
  return (
    <div className="relative h-[72px] bg-[#668bd8] px-5 text-white">
      {showBack && (
        <button
          type="button"
          onClick={() => window.history.back()}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[14px] font-semibold"
        >
          ‹ Back
        </button>
      )}

      <div className="flex h-full items-center justify-center">
        <div className="rounded-full bg-[#5b7fca] px-8 py-2 text-[14px] font-bold shadow-sm">
          {title}
        </div>
      </div>
    </div>
  );
}