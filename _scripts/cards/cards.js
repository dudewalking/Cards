
document.addEventListener("DOMContentLoaded", function () {
    loadCards();
});


function loadCards() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/cards.json', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {return;}

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                var cards = JSON.parse(xhr.responseText);
            } catch (e) {
                console.log('Wrong response!' + e.message);
            }
            showCards(cards);
        }
    }
}


function showCards(cards) {
    var count = 10;
    cards.forEach(function (card) {

        var content = document.querySelector('.cards-section');
        var article = document.createElement('article');
        article.classList.add('card');
        content.appendChild(article);

        HEADER(card, count, article);
        FIGURE(card, article);
        DIV(card, article);
        UL(card, article);

        count++;
    })
}

