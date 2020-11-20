/* Applicazione schematica semplice di un algoritmo di ricerca applicabile ad un array ordinato */

 var a = new Array( 1, 4, 6, 7, 9, 12, 13, 16, 17, 19, 23, 25, 26, 28 );   //array di valori ordinati
/*
var a = [1, 3, 6, 7, 8, 9,67878,67,886,78,78,44,67,4334,5,897897,8978978,8778,89,7,7,89,89,789,789,77,12,1]; //array di valori non ordinati
a.sort();
console.log(a.sort());
*/

// questa invece è la versione ricorsiva
/* function RicercaRicorsiva(valoredacercare, primo, ultimo) {
  if( primo > ultimo )
    return -1;
  var medio = Math.floor((primo + ultimo) / 2);
  if( valoredacercare == a[medio] )
    return medio;
  if( valoredacercare < a[medio] )
    return RicercaRicorsiva(valoredacercare, primo, medio - 1);
  else
    return RicercaRicorsiva(valoredacercare, medio + 1, ultimo);
}

alert( RicercaRicorsiva(4, 0, a.length-1) );
alert( RicercaRicorsiva(10, 0, a.length-1) ); */
// che mostra gli stessi valori


function RicercaNonRicorsiva(valoredacercare) {
  var primo = 0, ultimo = a.length - 1, medio;
  while( primo <= ultimo ) {
    medio = Math.floor((primo + ultimo) / 2);
    if( a[medio] == valoredacercare )
      return medio; // valoredacercare trovato alla posizione medio
    if( a[medio] < valoredacercare ) {
      primo = medio + 1;  // valoredacercare è tra i successivi
    }
    else {
      ultimo = medio - 1;  // valoredacercare è tra i precedenti
    }
  }
  // tutti gli elementi scartati, valoredacercare non c'è
  return -1;
}
alert( RicercaNonRicorsiva(6) );  // mostra 2 (a[2] è l'elemento cercato) nella lista ordinata ( o riordinata se si parla della seconda variante)
alert( RicercaNonRicorsiva(24) );  // mostra -1 (elemento non trovato)

