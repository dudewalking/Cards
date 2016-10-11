var HEADER = function createHeader(card, count, article) {

    var header = document.createElement('header');
    article.appendChild(header);
    header.classList.add('card-header');
    header.classList.add('noselect');

    var input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'box' + count;
    header.appendChild(input);

    var label = document.createElement('label');
    label.setAttribute('for', 'box' + count);
    header.appendChild(label);

    var span = document.createElement('span');
    span.textContent = card.name;
    label.appendChild(span);

    var p = document.createElement('p');
    p.textContent = card.number;
    header.appendChild(p);
};
