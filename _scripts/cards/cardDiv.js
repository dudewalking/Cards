var DIV = function createDiv(card, article) {
    var div = document.createElement('div');
    div.classList.add('card-tool-bar');
    div.classList.add('noselect');
    article.appendChild(div);

    var ul = div.appendChild(document.createElement('ul'));
    var li1 = ul.appendChild(document.createElement('li'));
    var a1 = li1.appendChild(document.createElement('a'));
    a1.href = '#';
    var imgPen = a1.appendChild(document.createElement('img'));
    imgPen.src = 'public/images/cards/pen.png';

    var li2 = ul.appendChild(document.createElement('li'));
    var a2 = li2.appendChild(document.createElement('a'));
    a2.href = '#';
    var imgLPlus = a2.appendChild(document.createElement('img'));
    imgLPlus.src = 'public/images/cards/l-plus-sign.png';

    var li3 = ul.appendChild(document.createElement('li'));
    var a3 = li3.appendChild(document.createElement('a'));
    a3.href = '#';
    var imgArrowLeft = a3.appendChild(document.createElement('img'));
    imgArrowLeft.src = 'public/images/cards/arrow-left.png';

    var li4 = ul.appendChild(document.createElement('li'));
    var a4 = li4.appendChild(document.createElement('a'));
    a4.href = '#';
    var imgArrowRight = a4.appendChild(document.createElement('img'));
    imgArrowRight.src = 'public/images/cards/arrow-right.png';
};
