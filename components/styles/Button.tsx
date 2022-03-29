import React from "react";

export default function Button({
  text,
  variant,
}: {
  text: String;
  variant: String;
}) {
  return (
    <button
      className={`block m-auto border w-32 border-orange-400 hover:tracking-wider ${
        variant === "contained"
          ? "bg-orange-400 text-white "
          : "bg-white text-orange-400 "
      } px-4 py-1 rounded`}
    >
      {text}
    </button>
  );
}
