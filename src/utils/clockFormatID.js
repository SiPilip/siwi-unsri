export default function clockFormatID(date) {
  const dateObject = new Date(Date.parse(date));
  let string = dateObject.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  string = string.replaceAll(".", ":");
  string = string.slice(0, 8);
  string = string + " WIB";
  return string;
}
