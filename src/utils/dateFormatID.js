export default function dateFormatID(date) {
  const dateObject = new Date(Date.parse(date));
  const dateWithoutTime = dateObject;
  dateWithoutTime.setHours(0, 0, 0, 0);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateWithoutTime.toLocaleDateString("id-ID", options);
}
