// Code JavaScript pour gérer la création et l'affichage des postes

// Tableau pour stocker les postes créés
var posts = [];

// Fonction pour créer un poste
function createPost(event) {
  event.preventDefault(); // Empêcher l'envoi du formulaire

  // Récupérer les valeurs des champs de formulaire
  var adresse = document.getElementById('adresse').value;
  var raison = document.getElementById('raison').value;
  var salaire = document.getElementById('salaire').value;

  // Créer un objet représentant le poste
  var post = {
    adresse: adresse,
    raison: raison,
    salaire: salaire
  };

  // Ajouter le poste au tableau des postes
  posts.push(post);

  // Effacer les champs de formulaire
  document.getElementById('adresse').value = '';
  document.getElementById('raison').value = '';
  document.getElementById('salaire').value = '';

  // Afficher les postes mis à jour
  displayPosts();
}

// Code JavaScript pour gérer l'affichage des postes dans Recherche.html

// Tableau pour stocker les postes créés
var posts = [];

// Vérifier si des postes sont déjà présents (pour la page Recherche.html)
if (document.getElementById('postList')) {
  displayPosts();
}

// Fonction pour afficher les postes
function displayPosts() {
  var postList = document.getElementById('postList');
  postList.innerHTML = '';

  // Parcourir tous les postes et les ajouter à la liste
  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var postItem = document.createElement('div');
    postItem.classList.add('post');

    var raisonElement = document.createElement('p');
    raisonElement.innerHTML = '<strong>Raison:</strong> ' + post.raison;
    postItem.appendChild(raisonElement);

    var adresseElement = document.createElement('p');
    adresseElement.innerHTML = '<strong>Adresse:</strong> ' + post.adresse;
    postItem.appendChild(adresseElement);

    var salaireElement = document.createElement('p');
    salaireElement.innerHTML = '<strong>Salaire:</strong> ' + post.salaire;
    postItem.appendChild(salaireElement);

    postList.appendChild(postItem);
  }
}