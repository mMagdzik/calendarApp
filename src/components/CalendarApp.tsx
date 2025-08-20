import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FiMessageCircle, FiEdit } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";

const CalendarApp = () => {
  return (
    <div className="w-3/5 min-w-[90vmin] aspect-[3/2] bg-[#1e242d] p-[3rem] rounded-[3rem] border-[1rem] border-[#0f1319] flex gap-[5rem] relative [transform-style:preserve-3d]">
      <div className="absolute bottom-[-12rem] left-1/2 -translate-x-1/2 rotate-x-[50deg] w-[90%] h-[16rem] bg-[rgba(0,0,0,0.5)]  blur-[4rem]"></div>
      <div className="w-2/5">
        <h1 className="font-[Bebas_Neue] text-[clamp(4rem,3.8cqi,7rem)] text-white tracking-[0.3rem] pl-[1.3rem]">
          Calendar
        </h1>
        <div className="flex items-center gap-[1rem] my-[3.5rem]">
          <h2 className="text-[clamp(1.5rem,1.5cqi,2.5rem)] text-[#bbb] pl-[1.3rem]">
            May,
          </h2>
          <h2 className="text-[clamp(1.5rem,1.5cqi,2.5rem)] text-[#bbb] pl-[1.3rem]">
            2024
          </h2>
          <div className="flex gap-[1rem] ml-auto">
            <FaAngleLeft className="bx bx-chevron-left w-[2.5rem] h-[2.5rem] bg-[#2c3542] rounded-full flex justify-center items-center  text-[#c97f1a] cursor-pointer" />
            <FaAngleRight className="bx bx-chevron-left w-[2.5rem] h-[2.5rem] bg-[#2c3542] rounded-full flex justify-center items-center  text-[#c97f1a] cursor-pointer" />
          </div>
        </div>
        <div className="w-full flex my-[3rem]">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <span
              key={day}
              className="w-[calc(100%/7)] text-[clamp(1rem,0.8cqi,1.3rem)] font-bold uppercase text-[#78879e] tracking-[0.1rem] flex justify-center"
            >
              {day}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap">
          {Array.from({ length: 31 }, (_, i) => (
            <span
              key={i}
              className="text-[clamp(1.2rem,1cqi,1.6rem)] w-[calc(100%/7)] aspect-square flex justify-center items-center text-[#ddd] cursor-pointer [text-shadow:0_0.5rem_1rem_rgba(0,0,0,0.2)]"
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>

      <div className="w-3/5 h-full py-[3rem] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className=" absolute top-[35%] left-[3rem] bg-[#161b22] w-[clamp(25rem,21cqi,40rem)] aspect-[10/9] rounded-[1rem] shadow-[0_1rem_3rem_rgba(0,0,0,0.3)] flex flex-col justify-center items-center gap-[2rem] p-[2rem]">
          <div className="flex gap-[1rem]">
            <div
              className="w-[clamp(4rem,4cqi,7rem)] bg-[#00a3ff] text-[#fff] font-[Bebas_Neue] 
              text-[clamp(1.5rem,1.5cqi,2.2rem)] 
              flex justify-center items-center 
              shadow-[0_0_1.5rem_1rem_rgba(0,163,255,0.2)] 
              tracking-[0.1rem]"
            >
              Time
            </div>
            <input
              type="number"
              name="hours"
              min={0}
              max={24}
              className="bg-transparent border-t-[0.2rem] border-b-[0.2rem] border-[#00a3ff]  text-white w-[clamp(4rem,4cqi,7rem)] h-[4rem]  text-center text-[clamp(1.2rem,1.2cqi,1.6rem)] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              type="number"
              name="minutes"
              min={0}
              max={60}
              className="bg-transparent border-t-[0.2rem] border-b-[0.2rem] border-[#00a3ff]  text-white w-[clamp(4rem,4cqi,7rem)] h-[4rem]  text-center text-[clamp(1.2rem,1.2cqi,1.6rem)] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <textarea
            placeholder="Enter Event Text (Maximum 60 Characters)"
            className="w-[clamp(15rem,15cqi,25rem)] aspect-[5/2] resize-none bg-[#354152] p-[1rem] rounded-[0.5rem] border-[0.1rem] border-transparent outline-none text-[#78879e]  duration-500  focus:border-[#00a3ff] placeholder:text-[clamp(1rem,0.8cqi,1.2rem)] placeholder:text-[#78879e] "
          ></textarea>
          <button className="w-[clamp(15rem,15cqi,25rem)] h-[4rem] bg-[#ef9011] text-[#fff] text-[clamp(1.5rem,1.5cqi,2.2rem)] tracking-[0.1rem]border-none shadow-[0_0_1.5rem_1rem_rgba(239,144,17,0.2)]cursor-pointer font-[Bebas Neue, sans-serif] rounded-[0.5rem] active:translate-y-[0.1rem]">
            Add Event
          </button>
          <button className="absolute top-4 right-4 bg-transparent border-none cursor-pointer">
            <IoCloseCircleOutline className="text-[2.5rem] text-[#fff]" />
          </button>
        </div>
        <div className="w-full h-[7rem] bg-[#00a3ff] py-[1.5rem] rounded-[1rem] flex items-center mb-[2rem] relative">
          <div className="flex flex-col items-center w-1/4  border-r border-[rgba(255,255,255,0.5)]">
            <div className="text-[clamp(1rem,1cqi,1.2rem)] text-[#ddd]">
              May 15, 2024
            </div>
            <div className="text-[clamp(1.3rem,1cqi,1.6rem)] text-[#fff] font-bold leading-[4rem]">
              10:00
            </div>
          </div>
          <div className="text-[clamp(1.2rem,1cqi,1.4rem)] leading-[2rem] text-[#fff] w-3/4 pl-[1rem] pr-[3rem] overflow-break-word">
            Meeting
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4  flex flex-col gap-[1.1rem] ">
            <FiEdit className="text-[#fff] cursor-pointer text-[1rem]" />
            <FiMessageCircle className="text-[#fff] cursor-pointer text-[1rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
