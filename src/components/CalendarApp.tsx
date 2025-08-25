import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";

type EventsType = {
  date: Date;
  time: string;
  text?: string;
  id: number;
};

const CalendarApp: React.FC = () => {
  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const monthsOfYear: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate: Date = new Date();
  const [currentMonth, setCurrentMonth] = useState<number>(
    currentDate.getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    currentDate.getFullYear()
  );
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [showEventPopup, setShowEventPopup] = useState<boolean>(false);
  const [events, setEvents] = useState<EventsType[]>([]);
  const [eventTime, setEventTime] = useState<{
    hours: string;
    minutes: string;
  }>({ hours: "00", minutes: "00" });
  const [eventText, setEventText] = useState<string>("");
  const [editingEvent, setEditingEvent] = useState<EventsType | null>(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthName = monthsOfYear[currentMonth];

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear - 1 : prevYear
    );
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();

    if (clickedDate >= today || isSameDay(clickedDate, today)) {
      setSelectedDate(clickedDate);
      setShowEventPopup(true);
      setEventText("");
      setEventTime({ hours: "00", minutes: "00" });
      setEditingEvent(null);
    }
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleEventSubmit = () => {
    const newEvent = {
      id: editingEvent ? editingEvent.id : Date.now(),
      date: selectedDate,
      time: `${eventTime.hours.padStart(2, "0")}:${eventTime.minutes.padStart(
        2,
        "0"
      )}`,
      text: eventText,
    };

    let updatedEvents = [...events];

    if (editingEvent) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === editingEvent.id ? newEvent : event
      );
    } else {
      updatedEvents.push(newEvent);
    }

    updatedEvents.sort((a, b) => a.date.getTime() - b.date.getDate());

    setEvents(updatedEvents);
    setEventTime({ hours: "00", minutes: "00" });
    setEventText("");
    setShowEventPopup(false);
    setEditingEvent(null);
  };

  const handleEditEvent = (event: EventsType) => {
    setSelectedDate(new Date(event.date));
    setEventTime({
      hours: event.time.split(":")[0],
      minutes: event.time.split(":")[1],
    });
    setEventText(event.text ?? "");
    setEditingEvent(event);
    setShowEventPopup(true);
  };

  const handleDeleteEvent = (eventId: number) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // konwersja na number i ograniczenie
    let numValue = Number(value);
    if (name === "minutes") {
      numValue = Math.max(0, Math.min(59, numValue)); // clamp 0–59
    }
    if (name === "hours") {
      numValue = Math.max(0, Math.min(23, numValue)); // clamp 0–23
    }

    // zapisz jako string z padStart
    setEventTime((prevTime) => ({
      ...prevTime,
      [name]: numValue.toString().padStart(2, "0"),
    }));
  };

  return (
    <div
      className="relative flex flex-col
    w-[95%] h-[95vh] max-h-[95vh] bg-[#1e242d] p-[2rem] rounded-[3rem] border-[0.5rem] border-[#56819a]
    gap-8 overflow-hidden [transform-style:preserve-3d]

    /* small screens */
    sm:w-full sm:h-auto sm:max-h-[95vh] sm:gap-8

    /* medium screens */
    md:w-3/5 md:h-auto md:gap-[5rem] md:flex-row

    /* large screens */
    lg:gap-[5rem] lg:border-[1rem]"
    >
      <div
        className=" absolute bottom-[-12rem] left-1/2 -translate-x-1/2 rotate-x-[50deg]
    h-[16rem] w-full bg-[rgba(0,0,0,0.5)] blur-[4rem] overflow-hidden
    sm:w-[70%] sm:mx-auto
    lg:w-[90%] lg:mx-0 "
      ></div>
      <div className="w-full md:w-2/5 m-5">
        <h1 className="font-[Bebas_Neue] text-[clamp(4rem,3.8cqi,7rem)] text-white tracking-[0.3rem] pl-[1.3rem]">
          Calendar
        </h1>
        <div className="flex flex-col sm:flex-row justify-between sm:gap:1 gap-[1rem] sm:my-[1rem] my-[2rem] ">
          <h2 className="text-[clamp(1.5rem,1.5cqi,2.5rem)] text-[#bbb] ">
            {monthName}, {currentYear}
          </h2>
          <div className="flex gap-[1rem] items-center">
            <FaAngleLeft
              className="bx bx-chevron-left w-[2.5rem] h-[2.5rem] bg-[#2c3542] rounded-full flex justify-center items-center  text-[#e8f05a] cursor-pointer active:translate-y-[0.1rem]"
              onClick={prevMonth}
            />
            <FaAngleRight
              className="bx bx-chevron-left w-[2.5rem] h-[2.5rem] bg-[#2c3542] rounded-full flex justify-center items-center  text-[#e8f05a] cursor-pointer active:translate-y-[0.1rem]"
              onClick={nextMonth}
            />
          </div>
        </div>
        <div className="w-full flex my-[2rem]">
          {daysOfWeek.map((day) => (
            <span
              key={day}
              className="w-[calc(100%/7)] text-[clamp(1rem,0.8cqi,1.3rem)] font-bold uppercase text-[#78879e] tracking-[0.1rem] flex justify-center"
            >
              {day}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-[0.25rem]">
          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <span
              key={`empty-${index}`}
              className="text-[clamp(1.2rem,1cqi,1.6rem)] w-[calc(100%/7)] aspect-square flex justify-center items-center text-[#ddd] cursor-pointer [text-shadow:0_0.5rem_1rem_rgba(0,0,0,0.2)]"
            />
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <span
              key={day + 1}
              className={`text-[clamp(1.2rem,1cqi,1.6rem)] w-[calc(100%/7)] aspect-square flex justify-center items-center cursor-pointer [text-shadow:0_0.5rem_1rem_rgba(0,0,0,0.2)]
               ${
                 day + 1 === currentDate.getDate() &&
                 currentMonth === currentDate.getMonth() &&
                 currentYear === currentDate.getFullYear()
                   ? "bg-[#e8f05a] rounded-full shadow-[0_0_2rem_rgba(239,144,17,0.99)] text-[#0d0c0c] "
                   : "text-[#ddd]"
               }`}
              onClick={() => handleDayClick(day + 1)}
            >
              {day + 1}
            </span>
          ))}
        </div>
      </div>

      <div className=" w-full md:w-3/5 h-full  overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {showEventPopup && (
          <div
            className="z-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-[#161b22] w-[clamp(25rem,21cqi,40rem)] aspect-[10/9] rounded-[1rem] shadow-[0_1rem_3rem_rgba(0,0,0,0.3)] flex flex-col justify-center items-center gap-[2rem] p-[2rem]
          
          "
          >
            <div className="flex gap-[1rem]">
              <div
                className="w-[clamp(4rem,4cqi,7rem)] bg-[#56819a] text-[#fff] font-[Bebas_Neue] 
              text-[clamp(1.5rem,1.5cqi,2.2rem)] 
              flex justify-center items-center 
              shadow-[0_0_1.5rem_1rem_rgba(0,163,255,0.2)] 
              tracking-[0.1rem] rounded-[0.5rem]"
              >
                Time
              </div>
              <input
                type="number"
                name="hours"
                min={0}
                max={24}
                value={eventTime.hours}
                onChange={handleTimeChange}
                className="bg-transparent border-t-[0.2rem] border-b-[0.2rem] border-[#56819a]  text-white w-[clamp(4rem,4cqi,7rem)] h-[4rem]  text-center text-[clamp(1.2rem,1.2cqi,1.6rem)] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <input
                value={eventTime.minutes}
                onChange={handleTimeChange}
                type="number"
                name="minutes"
                min={0}
                max={60}
                className="bg-transparent border-t-[0.2rem] border-b-[0.2rem] border-[#56819a]  text-white w-[clamp(4rem,4cqi,7rem)] h-[4rem]  text-center text-[clamp(1.2rem,1.2cqi,1.6rem)] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <textarea
              value={eventText}
              onChange={(e) => {
                if (e.target.value.length <= 60) {
                  setEventText(e.target.value);
                }
              }}
              placeholder="Enter Event Text (Maximum 60 Characters)"
              className="w-[clamp(15rem,15cqi,25rem)] aspect-[5/2] resize-none bg-[#354152] p-[1rem] rounded-[0.5rem] border-[0.1rem] border-transparent outline-none text-[#d5deeb]  duration-500  focus:border-[#56819a] placeholder:text-[clamp(1rem,0.8cqi,1.2rem)] placeholder:text-[#78879e] "
            ></textarea>
            <button
              className="w-[clamp(15rem,15cqi,25rem)] h-[4rem] bg-[#e8f05a] text-[#000] text-[clamp(1.5rem,1.5cqi,2.2rem)] tracking-[0.1rem]border-none shadow-[0_0_1.5rem_1rem_rgba(239,144,17,0.2)]cursor-pointer font-[Bebas Neue, sans-serif] rounded-[0.5rem] active:translate-y-[0.1rem] "
              onClick={handleEventSubmit}
            >
              {editingEvent ? "Update Event" : "Add Event"}
            </button>
            <button
              className="absolute top-4 right-4 bg-transparent border-none cursor-pointer active:translate-y-[0.1rem]"
              onClick={() => setShowEventPopup(false)}
            >
              <IoCloseCircleOutline className="text-[2.5rem] text-[#fff]" />
            </button>
          </div>
        )}
        {events.map((event, index) => {
          return (
            <div
              className="w-full h-[7rem] bg-[#56819a] my-1 rounded-[1rem] flex justify-center mb-[2rem] relative"
              key={index}
            >
              <div className="flex flex-col text-center xs:w-full  px-5   border-r border-[rgba(255,255,255,0.5)] ">
                <div className="text-[clamp(1.1rem,1cqi,1.3rem)] text-[#ddd] text-center pt-1 ">
                  {`${
                    monthsOfYear[event.date.getMonth()]
                  } ${event.date.getDate()}, ${event.date.getFullYear()} `}
                </div>
                <div className="text-[clamp(1.2rem,1cqi,1.5rem)] text-[#fff] font-bold leading-[4rem]">
                  {event.time}
                </div>
              </div>
              <div className="text-[clamp(1.2rem,1cqi,1.4rem)] leading-[2rem] text-[#fff] w-3/4 pl-[1rem] pr-[3rem] flex items-center break-all  ">
                {event.text}
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4  flex flex-col gap-[1.1rem] items-center ">
                <IoCloseCircleOutline
                  className="text-[#fff] cursor-pointer text-[2rem] active:translate-y-[0.1rem] hover:text-[#ff3434]"
                  onClick={() => handleDeleteEvent(event.id)}
                />
                <FiEdit
                  className="text-[#fff] cursor-pointer text-[1.5rem] active:translate-y-[0.1rem] hover:text-[#b5ff34]"
                  onClick={() => handleEditEvent(event)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarApp;
