/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! */


//1.Scrivi un programma che stampi i numeri da 1 a 100,

for (var numero = 1; numero <= 100; numero++) {

  //3.Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if (numero % 3 == 0 && numero % 5 == 0 ) {
    console.log("FizzBuzz"); 
  //2. per i multipli di 3 stampi “Fizz” al posto del numero   
  } else if ( numero % 3 == 0 ){
    console.log("Fizz");
  //4. per i multipli di 5 stampi Buzz.  
  } else if ( numero % 5 == 0 ){
    console.log("Buzz");  
  } else {
    console.log(numero);
  }
}