let taches = [];

const champ = document.querySelector("#tache");
const erreur = document.querySelector("#erreur");
const compteur = document.querySelector("#compteur");
const listeTaches = document.querySelector("#listeTaches");

function onclickAjouterTache() {
  const texte = champ.value;

  if (!texte) {
    erreur.textContent = "Veuillez entrer une tâche.";
    return;
  }

  erreur.textContent = "";

  taches.push({ texte: texte, termine: false });

  champ.value = "";

  afficherListe();
}


function onclickSupprimerTache(index) {
    taches.splice(index, 1);
    afficherListe();
}

function onclickTerminerTache(index) {
    if (taches[index].termine === false) {
        taches[index].termine = true;
    } else {
        taches[index].termine = false;
    }
    afficherListe();
}

function afficherListe() {
    listeTaches.innerHTML = "";
    let nbEnCours = 0;

    for (let i = 0; i < taches.length; i++) {   
        const tache = taches[i];
        const li = document.createElement("li");
        if (tache.termine === true) {
            li.className = "termine";
        } else {
            nbEnCours++;
        }
        li.innerHTML = tache.texte + " <button onclick='onclickTerminerTache(" + i + ")'>Terminé</button>";
        li.innerHTML += " <button onclick='onclickSupprimerTache(" + i + ")'>Supprimer</button>";
        
        listeTaches.appendChild(li);
    }
compteur.textContent = nbEnCours + " tâche(s) en cours";
}






