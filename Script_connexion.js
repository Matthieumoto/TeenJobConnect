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