var UL = function createUl(card, article) {

    var cardInfo = document.createElement('ul');
    cardInfo.classList.add('card-info');
    article.appendChild(cardInfo);

    var cardInfoLi1 = cardInfo.appendChild(document.createElement('li'));
    var a11 = cardInfoLi1.appendChild(document.createElement('a'));
    a11.href = '#';
    a11.textContent = card.firstNameInfo;
    var span11 = cardInfoLi1.appendChild(document.createElement('span'));
    span11.textContent = card.firstNumberInfo;


    var cardInfoLi2 = cardInfo.appendChild(document.createElement('li'));
    var a22 = cardInfoLi2.appendChild(document.createElement('a'));
    a22.href = '#';
    a22.textContent = card.secondNameInfo;
    var span22 = cardInfoLi2.appendChild(document.createElement('span'));
    span22.textContent = card.secondNumberInfo;

    var cardInfoLi3 = cardInfo.appendChild(document.createElement('li'));
    var a33 = cardInfoLi3.appendChild(document.createElement('a'));
    a33.href = '#';
    a33.textContent = card.thirdNameInfo;
    var span33 = cardInfoLi3.appendChild(document.createElement('span'));
    span33.textContent = card.thirdNumberInfo;

    var cardInfoLi4 = cardInfo.appendChild(document.createElement('li'));
    var a44 = cardInfoLi4.appendChild(document.createElement('a'));
    a44.href = '#';
    a44.textContent = card.fourthNameInfo;
    var span44 = cardInfoLi4.appendChild(document.createElement('span'));
    span44.textContent = card.fourthNumberInfo;
};
