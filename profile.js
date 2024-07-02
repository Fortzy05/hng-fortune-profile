// Display current time in UTC
document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElem = document.getElementById("currentTime");
  const currentDayElem = document.getElementById("currentDay");

  function updateTime() {
    const now = new Date();

    // Extract and format the current time in UTC
    const utcHours = now.getUTCHours().toString().padStart(2, "0");
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");
    const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
    currentTimeElem.textContent = utcTime;

    // Extract and format the current day of the week
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    currentDayElem.textContent = dayOfWeek;
  }

  // Initial update
  updateTime();

  // Update time every second
  setInterval(updateTime, 1000);
});
