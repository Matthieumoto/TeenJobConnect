document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.Connexion');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupère les valeurs des champs de connexion
        var identifiant = document.getElementById('identifiant').value;
        var motDePasse = document.getElementById('motDePasse').value;

        // Vérifie les identifiants
        if (identifiant === 'Matthieu' && motDePasse === '0000') {
            // Redirige vers la page d'accueil si les identifiants sont corrects
            window.location.href = 'accueil.html';
        } else {
            // Redirige vers la page d'erreur de connexion si les identifiants sont incorrects
            window.location.href = 'erreur.html';
        }          
    });
});

 // Vérifiez si la page actuelle est "Fin_inscription.html" avant de générer les confettis
 if (window.location.href.endsWith('Fin_inscription.html')) {
    document.addEventListener('DOMContentLoaded', generateConfetti);
}

function generateConfetti() {
    const confettiCount = 500; // Nombre de confettis à générer
    const colors = ['#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF']; // Couleurs des confettis
  
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 5 + 's'; // Délai d'animation aléatoire pour chaque confetti
      document.body.appendChild(confetti);
    }
}

function redirectionInscription() {
    // Redirigez vers la page d'inscription
    window.location.href = 'inscription.html';
}

function redirectionConnexion() {
    // Redirigez vers la page de connexion
    window.location.href = 'connexion.html';
}
  
  document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const identifiant = document.getElementById('identifiant').value;
    const motDePasse = document.getElementById('motDePasse').value;
  
    // Enregistrer l'utilisateur (vous devez implémenter cette fonction)
    enregistrerUtilisateur(identifiant, motDePasse);
  
    // Rediriger l'utilisateur vers la page d'inscription réussie
    window.location.href = 'Fin_inscription.html';
});
  
function enregistrerUtilisateur(identifiant, motDePasse) {
    // Code pour enregistrer les informations de l'utilisateur
    // Vous devez implémenter le code spécifique à votre scénario d'enregistrement des utilisateurs.
    // Par exemple, vous pouvez enregistrer les informations dans une base de données ou un fichier.
    // Ici, je vais simplement afficher les informations dans la console à des fins de démonstration.
    console.log('Nouvel utilisateur enregistré :');
    console.log('Identifiant :', identifiant);
    console.log('Mot de passe :', motDePasse);
}