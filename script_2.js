function factorielle(n) {
  if(n==0) return 1;
  else 
  	return n*factorielle(n-1);
}
var n = prompt("Entrez un nombre:");
/* n = k valeur du parametre n*/
let p = factorielle(n);
console.log("factorielle(" + n + ")=" + p);
