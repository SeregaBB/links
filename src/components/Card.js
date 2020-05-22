export default class Card {
    constructor(data){
        this.data = data;
        this.getCard = this.getCard.bind(this);
    }
    getCard() {
        return this._createCard();
    }
    _createCard() {
    
        const card = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const subtitle = document.createElement('p');
        const link = document.createElement('a');

        card.className = 'card';
        card.setAttribute('data-tags', this.data.tags);

        img.className = 'card__img';
        img.setAttribute('src',this.data.linkToImg);
        title.className = 'card__title';
        title.textContent = this.data.title;

        subtitle.className = 'card__subtitle';
        subtitle.textContent = this.data.subtitle;

        link.className = 'card__link';
        link.textContent = this.data.linkTitle;
        link.setAttribute('href', this.data.link);
        link.setAttribute('target', '_blank');

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(subtitle);
        card.appendChild(link);

        return card;
    }
}