let taches = [];

const champ = document.querySelector("#tache");
const erreur = document.querySelector("#erreur");
const compteur = document.querySelector("#compteur");
const listeTaches = document.querySelector("#listeTaches");

function ajouterTache() {
  const texte = champ.value;

  if (!texte) {
    erreur.textContent = "Veuillez entrer une tâche.";
    return;
  }

  erreur.textContent = "";

  taches.push({ texte: texte, terminee: false });

  champ.value = "";

  afficherListe();
}

