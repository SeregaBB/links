export default class Results {
    constructor(container) {
        this.container = container;

        this.appendCard = this.appendCard.bind(this);
    }

    appendCard(card){
        this.container.appendChild(card);
    }

    hideCard(card) { 
        card.classList.contains('card_visible_hidden') ? undefined : card.classList.add('card_visible_hidden');
    }

    showCard(card) {
        card.classList.contains('card_visible_hidden') ? card.classList.remove('card_visible_hidden') : undefined;
    }
}