let n = prompt("Ajoutez un nombre:");
let tag = "";
let esp = "";

  for ( var i = 1 ; i < n ; i++ ) {
    esp ="";  //declaration esp VIDE!
    tag +="*";  // mise en place du tag
for ( var j = 1 ; j <= n-i; j++ ) {  // pour i=1, j parcours 4 fois espace ; pour i=2, j parcours 3 fois espace, ...ect
     esp += " ";  // mise en place de l espace: 4 fois au debut (si n= 5 par ex)
     }
     console.log(esp+tag); //  afficher l espace + tag en meme temps
     }


