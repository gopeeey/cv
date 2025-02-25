import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <div className="border-b-[1.5px] pb-4 mb-6">
      <div className="flex items-center mb-2">
        <h2 className="mr-3 font-bold text-lg">{title}</h2>
        {/* <div className="w-full bg-accent-light h-4.5" /> */}
      </div>

      {children}
    </div>
  );
}
