let displayTime = document.querySelector('.current-time')

setInterval(() => {
    const time = new Date()
    displayTime.innerHTML = time.toLocaleTimeString()
}, 1000);