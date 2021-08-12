// Individual Countdown Cards
const daysEl = document.querySelector(".countdown__item-days")
const hoursEl = document.querySelector(".countdown__item-hours")
const minutesEl = document.querySelector(".countdown__item-minutes")
const secondsEl = document.querySelector(".countdown__item-seconds")

const secondsData = secondsEl.getAttribute("data-count")
const minutesData = minutesEl.getAttribute("data-count")
const hoursData = hoursEl.getAttribute("data-count")
const daysData = daysEl.getAttribute("data-count")


// Countdown Date
const endDate = "August 7, 2021"

function calculateTime() {
  const currDate = Date.now()
  const timestamp = countdownDate - currDate
  const seconds = new Date(timestamp).getSeconds()
  const minutes = new Date(timestamp).getMinutes()
  const hours = new Date(timestamp).getHours()
  const days = Math.round(timestamp / (1000 * 60 * 60 *24))
  
  updateUI(days, hours, minutes, seconds)
}

function updateUI(days, hours, minutes, seconds) {
  daysEl.setAttribute("data-count", days)
  hoursEl.setAttribute("data-count", hours)
  minutesEl.setAttribute("data-count", minutes)
  secondsEl.setAttribute("data-count", seconds)
}


class Countdown {
  constructor(endDate) {
    this.starDate = Date.now()
    this.endDate = new Date(endDate).getTime()
    this.timestamp = 0
    this.seconds = 0
    this.minutes = 0
    this.hours = 0
    this.days = 0
  }

  calculateTime(startDate) {
    this.timestamp = this.endDate - startDate
    this.seconds = new Date(this.timestamp).getSeconds()
    this.minutes = new Date(this.timestamp).getMinutes()
    this.hours = new Date(this.timestamp).getHours()
    this.days = Math.round(this.timestamp / (1000 * 60 * 60 *24))

    this.updateUI(this.seconds, this.minutes, this.hours, this.days)
  }

  updateUI(seconds, minutes, hours, days) {
    // Data Attribute 
    const prevSeconds = secondsEl.getAttribute("data-count")
    const prevMinutes = minutesEl.getAttribute("data-count")
    const prevHours = hoursEl.getAttribute("data-count")
    const prevDays = daysEl.getAttribute("data-count")
 
    // Fill Data Attribute If Empty
    if (prevSeconds === "") secondsEl.setAttribute("data-count", seconds)
    if (prevMinutes === "") minutesEl.setAttribute("data-count", minutes)
    if (prevHours === "") hoursEl.setAttribute("data-count", hours)
    if (prevDays === "") daysEl.setAttribute("data-count", days)

   
    // Update if data attribute has changed
    console.log(prevDays,)
    // if (prevSeconds !== seconds) this.updateCard(secondsEl, prevSeconds, seconds)
    parseInt(prevSeconds) !== seconds ? this.updateCard(secondsEl, prevSeconds, seconds, true) : this.updateCard(secondsEl, prevSeconds, seconds, false)
    parseInt(prevMinutes) !== minutes ? this.updateCard(minutesEl, prevMinutes, minutes, true) : this.updateCard(minutesEl, prevMinutes, minutes, false)
    parseInt(prevHours) !== hours ? this.updateCard(hoursEl, prevHours, hours, true) : this.updateCard(hoursEl, prevHours, hours, false)
    parseInt(prevDays) !== days ? this.updateCard(daysEl, prevDays, days, true) : this.updateCard(daysEl, prevDays, days, false)

    this.fillDataCount(seconds, minutes, hours, days)
  }

  updateCard(el, prevTime, currTime, isChanged) {

    if (isChanged) {
      el.firstElementChild.firstElementChild.firstElementChild.classList.add("unfold")
      el.firstElementChild.lastElementChild.lastElementChild.classList.add("fold")
    } else {
      el.firstElementChild.firstElementChild.firstElementChild.classList.remove("unfold")
      el.firstElementChild.lastElementChild.lastElementChild.classList.remove("fold")
    }

    setTimeout(() => {
      el.firstElementChild.firstElementChild.lastElementChild.textContent = currTime
      el.firstElementChild.lastElementChild.lastElementChild.textContent = currTime
    }, 30)
    
    setTimeout(() => {
      el.firstElementChild.firstElementChild.firstElementChild.textContent = prevTime
      el.firstElementChild.lastElementChild.firstElementChild.textContent = prevTime
    }, 15)
  }

  fillDataCount(seconds, minutes, hours, days) {
    secondsEl.setAttribute("data-count", seconds)
    minutesEl.setAttribute("data-count", minutes)
    hoursEl.setAttribute("data-count", hours)
    daysEl.setAttribute("data-count", days)
  }
}


const countdown = new Countdown("August 21, 2021")
countdown.calculateTime(Date.now())

setInterval(() => countdown.calculateTime(Date.now()), 1000)