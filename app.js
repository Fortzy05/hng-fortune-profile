
document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElem = document.getElementById("currentTime");
  const currentDayElem = document.getElementById("currentDay");

  function updateTime() {
    const now = new Date();

    
    const utcHours = now.getUTCHours().toString().padStart(2, "0");
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");
    const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
    currentTimeElem.textContent = utcTime;

    
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    currentDayElem.textContent = dayOfWeek;
  }

  
  updateTime();

  
  setInterval(updateTime, 1000);
});
