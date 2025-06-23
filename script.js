const time = document.getElementById('time')
const todayDate = document.getElementById('todayDate')
const getTime = () => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    hours = hours >= 10 ? hours : `0${hours}`
    minutes = minutes >= 10 ? minutes : `0${minutes}`
    seconds = seconds >= 10 ? seconds : `0${seconds}`

    time.textContent = `${hours} : ${minutes} : ${seconds}`
}

setInterval(() => {
    getTime()
}, 1000);
const date = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()]
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let month = months[date.getMonth()]
let tDate = date.getDate()
let year = date.getFullYear()

todayDate.textContent = `Today is ${day} ${month} ${tDate} ${year}`
