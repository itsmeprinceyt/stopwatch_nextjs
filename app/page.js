"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [online, setOnline] = useState(false);
  const [timer, setTimer] = useState(0);
  const IntervalId = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (online) {
      IntervalId.current = setInterval(() => {
        setTimer(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(IntervalId.current);
    }
  }, [online]);

  const start = () => {
    setOnline(true);
    startTimeRef.current = Date.now() - timer;
  }

  const stop = () => {
    setOnline(false);
  }

  const reset = () => {
    setTimer(0);
    setOnline(false);
  }

  const properTime = () => {
    let hours = Math.floor(timer / (1000 * 60 * 60));
    let minutes = Math.floor(timer / (1000 * 60) % 60);
    let seconds = Math.floor(timer / (1000) % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return ` ${hours} : ${minutes} : ${seconds} `;
  }
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center">
      <div className="main-content z-10 flex flex-col justify-center items-center h-full  bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100/20 shadow-xl shadow-black p-10 gap-10 rounded-xl">

        <div className="font-semibold text-6xl flex flex-col gap-4 justify-center items-center">
          <div>Stopwatch</div>
          <div className="font-extralight text-xs">Made by @itsmeprinceyt</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-5xl p-5 text-black text-shadow font-extralight" >{properTime()}</div>
          <div className=" flex gap-12">
            <button onClick={reset} className="flex justify-center items-center bg-white h-[50px] w-[50px] rounded-full shadow-xl hover:bg-sky-200 transition-all ease-in-out hover:animate-spin hover:shadow-none">
              <Image
                src="/reset-svgrepo-com.svg"
                width={20}
                height={20}
                alt="Repeat"
              />
            </button>
            <button onClick={start} className="flex justify-center items-center bg-white h-[50px] w-[50px] rounded-full shadow-xl hover:bg-sky-200 transition-all ease-in-out ">
              <Image
                className="rotate-180"
                src="/mini-arrow-start-svgrepo-com.svg"
                width={20}
                height={20}
                alt="Repeat"
              />
            </button>
            <button onClick={stop} className="flex justify-center items-center bg-white h-[50px] w-[50px] rounded-full shadow-xl hover:bg-sky-200 transition-all ease-in-out">
              <Image
                src="/pause-svgrepo-com.svg"
                width={20}
                height={20}
                alt="Repeat"
              />
            </button>
          </div>
        </div>
      </div>
      {/*Background Image*/}
      <Image
        src="/mountain2.jpg"
        fill={true}
        alt="Scenary"
        className="absolute inset-0 object-cover "
      />
    </div>
  );
}
