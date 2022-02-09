export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  // let hours = (props.date.getHours() < 10 ? `0` : ``) + props.date.getHours();

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
