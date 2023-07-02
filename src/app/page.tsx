"use client";
import React, { useRef, useState } from "react";
import Button from "./components/Button";
import { sum } from "./utils/sum";

export default function Home() {
  const [sumResult, setSumResult] = useState("");
  const a = useRef<HTMLInputElement | null>(null);
  const b = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (a?.current?.value && b?.current?.value) {
      const result = sum(Number(a.current.value), Number(b.current.value));
      setSumResult(result.toString());
    }
  };

  return (
    <main className="flex flex-col items-center justify-between h-screen border border-red-500">
      <div className="container h-full my-2 text-black bg-gray-900 border-2 border-red-500 rounded-md">
        <h1 className="text-6xl font-semibold text-center text-white">Soma</h1>
        <span className="flex justify-center gap-2 py-12">
          <input ref={a} type="number" />
          <input ref={b} type="number" />
          <Button
            text="Click!"
            onClick={handleClick}
            className="px-3 bg-blue-500 rounded"
          />

          <span className="text-white">
            result: <p>{sumResult}</p>
          </span>
        </span>
      </div>
    </main>
  );
}
