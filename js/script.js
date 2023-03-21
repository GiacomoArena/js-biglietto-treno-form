





document.getElementById('btn_genera').addEventListener('click', function(){
  const nome = document.getElementById('name').value;
  const km = document.getElementById('km_run').value;

  const select = document.getElementById("my-select");
  const selectedValue = select.value;
  let prezzo = 0.21 * km;
  max = 10;
  min = 1;
  let carrozza = Math.floor(Math.random() * (max - min +1) + min);
  document.getElementById('carrozza').innerHTML = carrozza


  codMin = 5000
  codMax = 9999

  let codiceCp = Math.floor(Math.random() * (codMax - codMin +1) + codMin);
  document.getElementById('codice-cp').innerHTML = codiceCp;
  

  document.getElementById('nome-utente').innerHTML = `${nome}
  `;

  

  if (selectedValue === 'minorenne') {
    prezzo -= (prezzo*20)/100;
  document.getElementById('output').innerHTML =  prezzo.toFixed(2) + "&euro;";
  document.getElementById('offerta').innerHTML = "Biglietto Under-18"
  } 
  else if (selectedValue === 'standard') {
    document.getElementById('output').innerHTML =  prezzo.toFixed(2) + "&euro;";
    document.getElementById('offerta').innerHTML = "Biglietto Standard"
  } 
  else if (selectedValue === 'over') {
    prezzo -= (prezzo*40)/100;
    document.getElementById('output').innerHTML =  prezzo.toFixed(2) + "&euro;";
    document.getElementById('offerta').innerHTML = "Biglietto Over-65"
  } 

  const bottomCnt = document.querySelector('.bottom_container')

  if(bottomCnt.classList.contains('hide')){
    bottomCnt.classList.remove('hide');
  }

  
  
  console.log(nome);
  console.log("questi sono i dati dell'utente km", km, "-", selectedValue );
})

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