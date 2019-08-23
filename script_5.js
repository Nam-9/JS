const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
console.log("************* livres ont été au moins empruntés une fois**************");

  books.sort(function(a, b){

  if(a.rented > 1 &&  b.rented >1 ) { 
console.log(" ces livres ont été emprunté plus d'une fois");
     }
  else {
    console.log(" ces livres  n'ont été emprunté plus d'une fois");
   }
   })
   
console.log(books);

console.log("************* livre le plus emprunté**************");
var tab = [];
   for ( var index in books)
    {//////////////////////////////////////////////////
var  t = books[index].rented ;
      tab.push(t);  // mettre dans un tableau
var max = Math.max(...tab);  // test le plus grand
     }////////////////////////////////////////////////// 
for ( var index in books) {    // DEXIEME boucle pour comparaison
if (books[index].rented === max)
   {
console.log(books[index].title);
   }
 }

console.log("************* livre le moins emprunté**************");
var tab = [];
   for ( var index in books)
    {//////////////////////////////////////////////////
var  t = books[index].rented ;
      tab.unshift(t);  // mettre dans un tableau
var min = Math.min(...tab);  // test le plus grand
     }////////////////////////////////////////////////// 
for ( var index in books) {    // DEXIEME boucle pour comparaison
if (books[index].rented === min)
   {
console.log(books[index].title);
   }
 }

console.log("*************le livre avec l'ID: 873495**************");
for ( let index in books){

if (books[index].id == 873495){
console.log(books[index].title);
  }
}


console.log("************Supprime le livre avec l'ID: 133712**************");
for ( let index in books){
books.shift();
}
console.log("deleted")

console.log("************Trie les livres par ordre alphabétique**************");
books.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})
console.log(books);
