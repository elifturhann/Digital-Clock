const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.am_pm')


const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    

    if (currentHour > 12){
        currentHour -= 12;
        timeEl.innerText = "PM"
    }
    else{
        currentHour < 12
        timeEl.innerText = "AM"
    }

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2,'0');
    secondEl.textContent = currentSeconds.toString().padStart(2,'0');
}
setInterval(updateTime,1000);
updateTime();