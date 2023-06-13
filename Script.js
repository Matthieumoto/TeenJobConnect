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