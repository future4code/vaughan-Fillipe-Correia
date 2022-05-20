import React from "react";

export default function Header() {
  return (
    <div className="fixed z-10 w-full h-14 px-10 flex justify-center items-center shadow-lg bg-primary lg:h-20">
      <div className="h-full flex items-center">
        <div className="bg-headline px-2 rounded-xl">
          <h1 className="color-light">Pharma Inc</h1>
        </div>
      </div>
    </div>
  );
}
