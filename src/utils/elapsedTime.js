const formatTimer = (seconds) => {
  let timer = Math.floor(seconds);
  let format = "second";
  if (seconds > 60) {
    timer = Math.floor(seconds / 60);
    format = "minute";
  }
  if (format === "minute" && timer > 60) {
    timer = Math.floor(timer / 60);
    format = "hour";
  }
  if (format === "hour" && timer >= 24) {
    timer = Math.floor(timer / 24);
    format = "day";
  }
  if (format === "day" && timer >= 30) {
    timer = Math.floor(timer / 30);
    format = "month";
  }
  if (format === "month" && timer >= 12) {
    timer = Math.floor(timer / 12);
    format = "year";
  }
  return {
    timer,
    format,
  };
};

const elapsedTime = (date) => {
  const currentDate = new Date();
  const [justPostDate] = date.split(".");
  const postDate = new Date(justPostDate);
  const timeDiff = currentDate - postDate;
  const seconds = timeDiff / 1000;
  return formatTimer(seconds);
};

export default elapsedTime;