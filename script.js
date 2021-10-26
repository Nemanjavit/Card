const cards = document.getElementsByClassName('responsiveCard');



[...cards].forEach(card => {
    card.addEventListener("click", openCard)
})




function openCard(event) {
    const selectedCard = event.currentTarget;
    const button = selectedCard.getElementsByClassName('card__toggler')
    const icons = selectedCard.getElementsByClassName('social-icon')


    if (event.target === button[0]) {
        selectedCard.classList.toggle('opened')
        let array = [...icons]
        let delay = 0.1
        array.reduceRight((_, el, i) => {
            el.classList.toggle("animate__fadeInLeft")
            delay += 0.1
            el.style.animationDelay = `${delay}s`
        }, null)
        if (selectedCard.classList.contains('opened')) {
            button[0].classList.add('spin')
            setTimeout(() => {
                button[0].firstElementChild.classList.replace('fa-bars', 'fa-arrow-down')
                button[0].classList.remove('spin')
            }, 600)
        } else {


            button[0].classList.add('spin')
            setTimeout(() => {
                button[0].firstElementChild.classList.replace('fa-arrow-down', 'fa-bars')
                button[0].classList.remove('spin')
            }, 600)
        }
    }
}

