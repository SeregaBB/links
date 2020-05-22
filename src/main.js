 import cards from './cards';
 import Card from './components/Card';
 import Results from './components/Results';
 import './pages/index.css';

const inpt = document.forms.frm.elements.query;
const resultsContainer = document.querySelector('.results');

const results = new Results(resultsContainer);

cards.forEach(element => {
        results.appendCard(new Card(element).getCard());
});



        inpt.addEventListener('input', function(){
            let query = this.value;
            let cardss = Array.from(document.querySelectorAll('.card'));

            cardss.forEach((card)=>{
                card.getAttribute('data-tags').indexOf(query.toLowerCase()) < 0 ?  results.hideCard(card) : results.showCard(card);
            });
        });
