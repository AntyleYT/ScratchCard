let jeux = JSON.parse(localStorage.getItem("jeux")) || [];
let indexJeu = 0;

function afficherJeu() {
    if (jeux.length === 0) {
        document.getElementById("game-title").textContent = "Aucun jeu";
        document.getElementById("game-id").textContent = "";
        document.getElementById("game-author").textContent = "";

        // Désactivation des boutons (grisés)
        document.getElementById("prev").disabled = true;
        document.getElementById("next").disabled = true;
        return;
    }

    let jeu = jeux[indexJeu];
    document.getElementById("game-title").textContent = jeu.nom;
    document.getElementById("game-author").textContent = "Par " + jeu.auteur;
    document.getElementById("game-id").textContent = "#" + (indexJeu + 1); // Affichage de l'ID

    document.getElementById("prev").disabled = indexJeu === 0;
    document.getElementById("next").disabled = indexJeu === jeux.length - 1;
}

document.getElementById("prev").addEventListener("click", () => {
    if (indexJeu > 0) {
        indexJeu--;
        afficherJeu();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (indexJeu < jeux.length - 1) {
        indexJeu++;
        afficherJeu();
    }
});

afficherJeu();
