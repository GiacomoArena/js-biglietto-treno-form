js-biglietto-treno-form
===
## Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- fascia di Età del passeggero
## calcolare 
il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


## **MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.

## **MILESTONE 2**:
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


- definire il valore degli input 'select' e'km' e salvarli in una variabile. Il click del pulsante genererá il prezzo sullo schermo in base alla fascia di etá selezionata:

 ```
 document.getElementById('btn_genera').addEventListener('click', function(){
  const nome = document.getElementById('name').value;
  const km = document.getElementById('km_run').value;
  let prezzo = 0.21 * km;
  max = 10;
  min = 1;
  let carrozza = Math.floor(Math.random() * (max - min +1) + min);
  
  const select = document.getElementById("my-select");
  const selectedValue = select.value;

  document.getElementById('nome-utente').innerHTML = `
  Nome Passeggero: ${nome}
  `;

  if (selectedValue === 'minorenne') {
    prezzo -= (prezzo*20)/100;
  document.getElementById('output').innerHTML = "Biglietto Under-18: " + carrozza + " " + prezzo.toFixed(2) + "&euro;";
  } 
  else if (selectedValue === 'standard') {
    document.getElementById('output').innerHTML =
  "Biglietto Standard: " + carrozza + " " + prezzo.toFixed(2) + "&euro;";
  } 
  else if (selectedValue === 'over') {
    prezzo -= (prezzo*40)/100;
  document.getElementById('output').innerHTML = "Biglietto Over-65: " + carrozza + " " + prezzo.toFixed(2) + "&euro;";
  } 

  const bottomCnt = document.querySelector('.bottom_container')

  if(bottomCnt.classList.contains('hide')){
    bottomCnt.classList.remove('hide');
  }

  
  
  console.log(nome);
  console.log("questi sono i dati dell'utente km", km, "-", selectedValue );
})
 
  ```

.
- creare il secondo bottone 'annulla' e far si che quando clicchiamo sul button venga nascosto tutto il contenuto generato e i dati precedentemente inseriti: 

```

let vedoCnt = true;

document.getElementById('btn_canc').addEventListener('click', function(){

  const km = document.getElementById('km_run')
  km.value = "";
  
  const nome = document.getElementById('name');
  nome.value = "";

  const select = document.getElementById("my-select");
  const selectedValue = select.value;

  const bottomCnt = document.querySelector('.bottom_container')

  if(bottomCnt.classList.contains('hide')){
    bottomCnt.classList.remove('hide');
  }else{
    bottomCnt.classList.add('hide');
  }

  console.log('stai nascondendo tutto',bottomCnt, km, selectedValue );
})

  ```
  .
  - creare un let carrozza che attraverso la formula
  ```
  max = 10;
  min = 1;
  let carrozza = Math.floor(Math.random() * (max - min +1) + min);
```
ci dará un numero da 1 a 10 che ipotizziamo sia la carrozza.

- iniziare a modificare il css per rendere piú aesthetic la page
quindi mettere gli input in un container suddiviso da 3 colonne e sotto i due button.

-creo la forma del ticket.





