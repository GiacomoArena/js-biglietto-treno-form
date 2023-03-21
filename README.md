js-biglietto-treno-form
===
## Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
## calcolare 
il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


## **MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.

- definire il valore degli input 'age' 'km' e salvarli in una variabile al click del pulsante genera:

 ```
 document.getElementById('btn_genera').addEventListener('click', function(){
  const km = document.getElementById('km_run').value;

  const age = document.getElementById('age').value;


  console.log('questi sono i km da percorrere e gli anni ', km, age);
})
 
  ```

- generare la risposta finale "output" con il prezzo del biglietto scontato o non






## **MILESTONE 2**:
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


