import "./Calendar.css";

function Day(props) {
      
  
    return (
    <div
      key={props._key}
      className={props.isWeekend ? "calender_day_weekend" : "calender_day"}
    >
      <div>{props.day}</div>
    </div>
  );
}

export default Day;
