//
import React from "react";
import Day from "./Day";
import { useContext } from "react";
import MonthContext from "./MonthContext";

function Month() {
  const { monthNumber, setMonthNumber } = useContext(MonthContext);

  //Utility functions

  //Returns of a days in a given month
  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  //Returns a day of the weekk of the first day of a given month
  function firtstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }

  //Checks is the day should be marked as weekend
  function isWeekend(i) {
    return i % 7 === 0 || i % 7 === 6;
  }

  //number of days that we add in the first row from previous month
  let addedDays;

  //day of the week of the first day of month
  let firstDay = firtstDayOfMonth(monthNumber, 2022);
  //console.log("First day: ", firstDay);

  //calulate how many days from previous month we add in first row
  if (firstDay !== 0) {
    addedDays = firstDay - 1;
  } else {
    addedDays = 6;
  }

  const daysInPerviousMonth = daysInMonth(monthNumber - 1, 2022);

  //array with all days in a month
  const days = [];

  //adding days from the previous month
  for (let i = 1; i <= addedDays; i++) {
    let setWeekend = isWeekend(days.length + 1);
    days.push({
      number: daysInPerviousMonth - addedDays + i,
      weekend: setWeekend,
    });
  }

  //adding day of the acutual month
  let numberOfDays = daysInMonth(monthNumber, 2022);
  for (let i = 1; i <= numberOfDays; i++) {
    let setWeekend = isWeekend(days.length + 1);
    days.push({ number: i, weekend: setWeekend });
  }

  //calculate max lenght (5 or 6 rows)
  let maxlenght;
  if (
    (firstDay === 6 && numberOfDays === 31) ||
    (firstDay === 0 && (numberOfDays === 30 || numberOfDays === 31))
  ) {
    maxlenght = 42;
  } else {
    maxlenght = 35;
  }

  //adding days from next month to fill the last row
  for (let i = 1; days.length < maxlenght; i++) {
    let setWeekend = isWeekend(days.length + 1);
    days.push({ number: i, weekend: setWeekend });
  }

  return (
    <div id="calendar_month">
      {days.map((day, i) => (
        <Day day={day.number} isWeekend={day.weekend} />
      ))}
    </div>
  );
}

export default Month;