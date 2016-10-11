var FIGURE = function createFigure(card, article) {

    var figure = document.createElement('figure');
    figure.classList.add('card-picture');
    figure.classList.add('noselect');
    article.appendChild(figure);

    var img = document.createElement('img');
    img.src = card.image;
    figure.appendChild(img);

    var imageName = document.createElement('a');
    imageName.href = '#';
    imageName.textContent = card.imageName;
    figure.appendChild(imageName);
};