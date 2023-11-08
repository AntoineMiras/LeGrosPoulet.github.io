// Variables pour compter les doubles
var doublesCount = 0;

// Fonction pour lancer les dés et gérer les règles du jeu
function lancerLesDes() {
    var de1 = diceAction(".dice_one"); // Lancer le premier dé
    var de2 = diceAction(".dice_two"); // Lancer le deuxième dé
    var somme = de1 + de2; // Calculer la somme des dés

    // Afficher la somme des dés
    var sumElement = document.getElementById("sum");
    sumElement.textContent = "Somme des dés : " + somme;

    var notification = document.getElementById("notification");
    var actions = []; // Liste des actions à appliquer
    
    if (de1 !== de2) {
        var doublesCount = 0
    }
    
    // Règles du jeu
    if (de1 === 1 || de2 === 1) {
        // Un des dés vaut 1
        var autreDe = de1 === 1 ? de2 : de1;
        actions.push("Buvez " + autreDe + " gorgée(s) !");
    }

    if (de1 === 4 || de2 === 4) {
        // Un des dés vaut 4
        var autreDe = de1 === 4 ? de2 : de1;
        actions.push("Distribuez un chifumi entre 2 personnes pour " + autreDe + " gorgée(s) !");
    }

    if (de1 === 3 || de2 === 3) {
        // Un des dés vaut 3
        var autreDe = de1 === 3 ? de2 : de1;
        actions.push("Gros poulet boit " + autreDe + " gorgée(s) !");
    }

    if (somme === 3) {
        actions.push("🎊 Vous devenez gros poulet 🎊!");
    }

    if (somme === 7) {
        actions.push("BISKIT !");
    }

    if (somme === 9) {
        actions.push("Le joueur précédent boit une gorgée !");
    }

    if (somme === 10) {
        actions.push("Vous buvez 1 gorgée !");
    }

    if (somme === 11) {
        actions.push("Le joueur suivant boit 1 gorgée !");
    }

    if (somme === 12) {
        actions.push("Inventez une nouvelle règle !");
    }

    if (de1 === de2) {
        // Cas des doubles
        actions.push("Double ! Vous buvez 1 gorgée et rejouez.");
        doublesCount++;

        if (doublesCount === 3) {
            var actions = ["Trois doubles ! Buvez cul sec !"];
            doublesCount = 0;
        }
        else if (de1 === 1 && de2 === 1) {
            // Double 1
            var actions = ["Double 1 ! Vous buvez 3 gorgées et rejouez!"];
        } else if (de1 === 3 && de2 === 3) {
            // Double 3
            var actions = ["Double 3 ! Le gros poulet boit 6 gorgées ! Buvez-en 1 et rejouez"];
        } else if (de1 === 4 && de2 === 4) {
            // Double 4
            var actions = ["Double 4 ! Distribuez deux chifumi pour 4 gorgées ! N'oubliez pas d'en boire une!"];
        }
    }

    // Afficher les actions cumulées
    if (actions.length > 0) {
        notification.textContent = actions.join(" ");
    } else {
        notification.textContent = "Rien ne se passe, au suivant...";
    }
}


function diceAction(dice_number){

        /** :: the dice :: */
        let diceOneOne = document.querySelector(dice_number + '_f1');
        let diceOneTwo = document.querySelector(dice_number + '_f2');
        let diceOneThree = document.querySelector(dice_number + '_f3');
        let diceOneFour = document.querySelector(dice_number + '_f4');
        let diceOneFive = document.querySelector(dice_number + '_f5');
        let diceOneSix = document.querySelector(dice_number + '_f6');

        let diceOne = Math.floor((Math.random() * 6 ) +1);
        
        diceOne === 1 ? diceOneOne.style.zIndex = '1' :                   diceOneOne.style.zIndex = '0';
        diceOne === 2 ? diceOneTwo.style.zIndex = '1' :                   diceOneTwo.style.zIndex = '0';
        diceOne === 3 ? diceOneThree.style.zIndex = '1' :                 diceOneThree.style.zIndex = '0';
        diceOne === 4 ? diceOneFour.style.zIndex = '1' :                 diceOneFour.style.zIndex = '0';
        diceOne === 5 ? diceOneFive.style.zIndex = '1' :                 diceOneFive.style.zIndex = '0';
        diceOne === 6 ? diceOneSix.style.zIndex = '1' :                   diceOneSix.style.zIndex = '0';
        return diceOne
};


// Attacher la fonction de lancement des dés au bouton
var rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", lancerLesDes);
