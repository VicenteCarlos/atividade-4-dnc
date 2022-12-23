const cards = document.querySelector(".content-cards");
let card, srcCard

for (let i=1; i<=4; i++) {
    card = document.createElement("img");
    card.className = `card-${i}`
    card.src = cardsImg[i-1]
    cards.appendChild(card)
}