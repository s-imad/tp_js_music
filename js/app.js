// Récupérer et variabiliser les <button>, dans le DOM

let btnList = document.getElementsByClassName('drum');
console.log(btnList);

// Parcourir l'ensemble de ces éléments grace a une boucle for, 
// et capter l'événement click pour chacun d'entre eux

for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function () {
        console.log('click ok');
        let btnText = this.innerText;
        console.log(btnText);
        playSound(btnText)
    });
}

// Capter l'evenement keypress

document.addEventListener('keypress', function (e) {
    console.log('touhe ok');
    let keyText = e.key;
    playSound(keyText);
})

// ici la fonction pour jouer un son
// avec un switch pour chaque lettre 

function playSound(btnClickAndPress) {
    switch (btnClickAndPress) {
        case 'w':
            let sonW = new Audio("sounds/w.mp3");
            sonW.play();
            break;
        case 'a':
            let sonA = new Audio("sounds/a.mp3");
            sonA.play();
            break;
        case 's':
            let sonS = new Audio("sounds/s.mp3");
            sonS.play();
            break;
        case 'd':
            let sonD = new Audio("sounds/d.mp3");
            sonD.play();
            break;
        case 'j':
            let sonJ = new Audio("sounds/j.mp3");
            sonJ.play();
            break;
        case 'k':
            let sonK = new Audio("sounds/k.mp3");
            sonK.play();
            break;
        case 'l':
            let sonL = new Audio("sounds/l.mp3");
            sonL.play();
            break;
    }
    AnimEffect(btnClickAndPress);
}

function AnimEffect(btnClickAndPress) {
    let button = document.getElementsByClassName(btnClickAndPress)[0];
    button.classList.add('pressed');

    setTimeout(() => {
        button.classList.remove('pressed');
    }, 200);
}