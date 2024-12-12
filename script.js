function updateClock(customTime = null) {
    const now = customTime || new Date();
  
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30; // 30° per hour + 0.5° per minute
    const minuteDegrees = minutes * 6 + (seconds / 60) * 6;     // 6° per minute + 0.1° per second
    const secondDegrees = seconds * 6;                          // 6° per second
  
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  }
  
  function setCustomTime() {
    const hourInput = parseInt(document.getElementById('hourInput').value) || 0;
    const minuteInput = parseInt(document.getElementById('minuteInput').value) || 0;
    const secondInput = parseInt(document.getElementById('secondInput').value) || 0;
  
    const customTime = new Date();
    customTime.setHours(hourInput);
    customTime.setMinutes(minuteInput);
    customTime.setSeconds(secondInput);
  
    updateClock(customTime);
  }
  
  // Initialize clock with current time and update every second
  setInterval(updateClock, 1000);
  updateClock();
  
  
  