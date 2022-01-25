import "./Calendar.css";

function Day(props) {
  return (
    <div key={props._key} className={"day day_" + props.dayType}>
      <div
        className={
          props.dayType === "selected" ? "day_frame_selected" : "day_frame"
        }
        onClick={props.onClick}
      >
        {props.day}
      </div>
    </div>
  );
}

export default Day;
