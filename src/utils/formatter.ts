//formatter for showing date in table
export const formatDate = (val) => {
  const date = new Date(val);
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};

//formatter for date on current timezone
export const formatFullDate = (val) => {
  const date = new Date(val);
  return (
    ("0" + date.getDate()).slice(-2) +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    date.getFullYear() +
    " " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2)
  );
};

//get greeting based on hours in day
export const getGreeting = () => {
  const today = new Date();
  return today.getHours() < 12
    ? "Good Morning"
    : today.getHours() < 18
    ? "Good Afternoon"
    : "Good Evening";
};
