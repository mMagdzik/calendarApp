import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
            <FaAngleLeft className="bx bx-chevron-left w-[3.5rem] h-[3.5rem] bg-[#2c3542] rounded-full flex justify-center items-center text-[2rem] text-[#c97f1a] cursor-pointer " />
            <FaAngleRight className="bx bx-chevron-left w-[3.5rem] h-[3.5rem] bg-[#2c3542] rounded-full flex justify-center items-center text-[2rem] text-[#c97f1a] cursor-pointer " />
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
        <div className="event-popup">
          <div className="time-input">
            <div className="event-popup-time">Time</div>
            <input
              type="number"
              name="hours"
              min={0}
              max={24}
              className="hours"
            />
            <input
              type="number"
              name="minutes"
              min={0}
              max={60}
              className="minutes"
            />
          </div>
          <textarea placeholder="Enter Event Text (Maximum 60 Characters)"></textarea>
          <button className="event-popup-btn">Add Event</button>
          <button className="close-event-popup">
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="event">
          <div className="event-date-wrapper">
            <div className="event-date">May 15, 2024</div>
            <div className="event-time">10:00</div>
          </div>
          <div className="event-text">Meeting</div>
          <div className="event-buttons">
            <i className="bx bxs-edit-alt"></i>
            <i className="bxr  bx-message"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
