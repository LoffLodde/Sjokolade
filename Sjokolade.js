/*I denne oppgaven skal du gå gjennom tallene 1-100

 Hvis tallet kan deles på 3, print sjoko til konsollen
 Hvis tallet kan deles på 5, print lade til konsollen
 Hvis tallet kan deles på både 3 og 5, print sjokolade til konsollen

 Lykke til :)
 */

 for( let i = 1; i <= 100; i++){
   if (i % 3 == 0 && i % 5 == 0){
      console.log(`${i} :sjokolade`)
   } else if (i % 3 == 0) {
      console.log(`${i} : sjoko`)
   } else if (i % 5 == 0) {
      console.log(`${i} : lade`)
   } else {
      console.log(`${i} : ${i}`)
   }
}

