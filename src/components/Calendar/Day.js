import './Calendar.css'

function Day(props){
    return (
        <div key={props._key} className={props.isWeekend ? "calender_day_weekend" : "calender_day"}>{props.day}</div>
    );
}

export default Day;