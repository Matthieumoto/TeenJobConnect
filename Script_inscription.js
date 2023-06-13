document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.Inscription');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
      const identifiant = document.getElementById('identifiant').value;
      const motDePasse = document.getElementById('motDePasse').value;
  
      // Rediriger l'utilisateur vers la page d'inscription réussie
      window.location.href = 'Fin_inscription.html';
    });
  });
  