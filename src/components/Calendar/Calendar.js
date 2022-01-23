import Month from "./Month";
import DaysOfWeek from "./DaysOfWeek";
import MonthSelect from "./MonthSelect";

import { useState } from "react";
import MonthContext from "./MonthContext.js";

import "./Calendar.css";



function Calendar() {
  const [monthNumber, setMonthNumber] = useState(1);
  const value = {monthNumber, setMonthNumber};

   return (
    <div id="main_container">
      <MonthContext.Provider value={value}>
        <MonthSelect />
        <DaysOfWeek />
        <Month/>
      </MonthContext.Provider>
    </div>
  );
}

export default Calendar;
