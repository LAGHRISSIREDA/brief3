// Nav bar responsive
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click',()=>{
    navBarLinks.classList.toggle('active');
});

// Form code



function envoyer(){
         var nom = document.getElementById('name').value;
         console.log('test1');
          alert('(Monsieur/Madame) '+ nom +' votre message a été envoyé avec succès .');
          console.log('test2');
            location.replace("index.html");
            }