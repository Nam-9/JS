function bot(comment)
{


var person = prompt(`Entrer votre comment: `)

if (person.length === 0 )

{ console.log("t'es en PLS ?")

}

else if (person.includes("Fortnite") === true)

{ console.log( "on s' fait une partie soum-soum ?")}

else if (person.includes("?") === true)

{ console.log("Ouais Ouais...")}

elseif (person.toUpperCase() === person)

{ console.log("Bordel ne me crie pas dessus ")}

else
{ console.log("Je m'en bas les  ...")}

}

bot();