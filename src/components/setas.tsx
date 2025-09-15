// src/components/setas.tsx

import React from "react";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer z-10 select-none text-2xl"
      onClick={onClick}
    >
      ➡️
    </div>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer z-10 select-none text-2xl"
      onClick={onClick}
    >
      ⬅️
    </div>
  );
};
