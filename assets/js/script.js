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

const countdownDry = (initialTime, span, intervalTime, timeFor) => {
    let time = initialTime
    setInterval(() => {
        if (time === 0) {
            time = initialTime
        }
        --time
        span.innerHTML = `${time}${timeFor}`
    }, intervalTime)
    span.innerHTML = `${time}${timeFor}`
}

countdownDry(60, spanOne, 1000, "S") //s
countdownDry(59, spanTwo, 60000, "M") //m
countdownDry(23, spanThre, 3600000, "H") //h
countdownDry(3, spanFour, 86400000, "D") //d














