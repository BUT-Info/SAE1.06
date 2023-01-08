// Sélectionne tous les éléments de la classe "card" et "card2" dans le document
const cords = document.querySelectorAll('.card, .card2')

// Pour chaque élément de la classe "card" ou "card2", ajoute un écouteur d'événement "click" qui appelle la fonction flipCard
cords.forEach(card => {
    card.addEventListener('click', flipCard);
});

// Fonction qui retourne une carte (élément de la classe "card" ou "card2") lorsqu'elle est cliquée
function flipCard(){
    // Récupère les éléments de la classe "front" et "back" à l'intérieur de l'élément sur lequel l'événement "click" a été déclenché
    const front = this.querySelector('.card-side.front');
    const back = this.querySelector('.card-side.back');
    // Récupère les éléments de la classe "front2" et "back2" à l'intérieur de l'élément sur lequel l'événement "click" a été déclenché
    const front2 = this.querySelector('.card-side.front2');
    const back2 = this.querySelector('.card-side.back2');

    // Si l'élément de la classe "front" existe, retourne la carte
    if(front){
        // Si la propriété "transform" de l'élément de la classe "front" est égale à "rotateY(180deg)", remet la carte à sa position initiale
        if(front.style.transform === 'rotateY(180deg)'){
            front.style.transform = 'rotateY(0deg)';
            back.style.transform = 'rotateY(-180deg)';
            // Sinon, retourne la carte
        } else{
            front.style.transform = 'rotateY(180deg)';
            back.style.transform = 'rotateY(0deg)'
        }
    }

    // Si l'élément de la classe "front2" existe, retourne la carte
    if(front2){
        // Si la propriété "transform" de l'élément de la classe "front2" est égale à "rotateY(180deg)", remet la carte à sa position initiale
        if(front2.style.transform === 'rotateY(180deg)'){
            front2.style.transform = 'rotateY(0deg)';
            back2.style.transform = 'rotateY(-180deg)';
            // Sinon, retourne la carte
        } else{
            front2.style.transform = 'rotateY(180deg)';
            back2.style.transform = 'rotateY(0deg)'
        }
    }

}


const cards = document.querySelectorAll('.card, .card2');

cards.forEach(card => {
    // Sélectionne tous les éléments .card-side
    const sides = card.querySelectorAll('.card-side');
    sides.forEach(side => {
        side.addEventListener('pointerover', function() {
            this.style.overflow = 'auto';
        });
        side.addEventListener('pointerout', function() {
            this.style.overflow = 'hidden';
        });
    });
});

$(function(){
    $("#btnTop").click(function(){
        $("html, body").animate({scrollTop: 0},"slow");
    });
});

