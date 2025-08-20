const CalendarApp = () => {
  return (
    <div className="border">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>
        <div className="navigate-date">
          <h2 className="month">May,</h2>
          <h2 className="year">2024</h2>
          <div className="buttons">
            <i className="bx bx-chevron-left"></i>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
        <div className="weekdays">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
        </div>
        <div className="days">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
      <div className="events">
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
