const countdown = document.querySelector(".countdown");
let span;
const cardsImg = [  "https://i.postimg.cc/MT802MYW/card1.png", 
                    "https://i.postimg.cc/qRXskJm2/card2.png", 
                    "https://i.postimg.cc/cCxQCpj2/card3.png", 
                    "https://i.postimg.cc/zD7C6fHr/card4.png"
                ]

for (let i=1; i<=4; i++) {
    span = document.createElement("span");
    span.className = `span-${i}`
    countdown.appendChild(span)
}

const spanOne = document.querySelector(".span-1");
const spanTwo = document.querySelector(".span-2");
const spanThre = document.querySelector(".span-3");
const spanFour = document.querySelector(".span-4");

const everySecond = initialSecond => {
    let second = initialSecond
    setInterval(() => {
        if (second === 0) {
            second = initialSecond
        }
        --second
        spanOne.innerHTML = `${second}S`
    }, 1000)
    spanOne.innerHTML = `${second}S`
}

everySecond(60)


const everyMminute =  initialMinute => {
    let minute = initialMinute
    setInterval(() => {
        if (minute===0) {
            minute = initialMinute
        }
        --minute
        spanTwo.innerHTML = `${minute}M`
    }, 60000)
    spanTwo.innerHTML = `${minute}M`
}

everyMminute(59)


const everyHour =  initialHour => {
    let hour = initialHour
    setInterval(() => {
        if (hour===0) {
            hour = initialHour
        }
        --hour
        spanThre.innerHTML = `${hour}H`
    }, 3600000)
    spanThre.innerHTML = `${hour}H`
}

everyHour(23)

const everyDay =  initialDay => {
    let day = initialDay
    setInterval(() => {
        if (day===0) {
            day = initialDay
        }
        --day
        spanFour.innerHTML = `${day}D`
    }, 86400000)
    spanFour.innerHTML = `${day}D`
}

everyDay(3)














