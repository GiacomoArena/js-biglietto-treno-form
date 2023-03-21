





document.getElementById('btn_genera').addEventListener('click', function(){
  
  const km = document.getElementById('km_run').value;

  const age = document.getElementById('age').value;
  let prezzo = 0.21 * km;

  if(age < 18){
    prezzo -= (prezzo*20)/100;
    document.getElementById('output').innerHTML = "Biglietto Under-18: " + prezzo.toFixed(2) + "&euro;";
  }
  else if (age >= 65) {
    prezzo -= (prezzo*40)/100;
    document.getElementById('output').innerHTML = "Biglietto Over-65: " + prezzo.toFixed(2) + "&euro;";
  }
  else {
    document.getElementById('output').innerHTML =
    "Biglietto Standard: " + prezzo.toFixed(2) + "&euro;";
  }

  const bottomCnt = document.querySelector('.bottom_container')

  if(bottomCnt.classList.contains('hide')){
    bottomCnt.classList.remove('hide');
  }

  
  console.log("questi sono i dati dell'utente km", km, "-",  age, "anni");
})

let vedoCnt = true;

document.getElementById('btn_canc').addEventListener('click', function(){

  const km = document.getElementById('km_run')
  km.value = "";

  const age = document.getElementById('age')
  age.value = "";

  const bottomCnt = document.querySelector('.bottom_container')

  if(bottomCnt.classList.contains('hide')){
    bottomCnt.classList.remove('hide');
  }else{
    bottomCnt.classList.add('hide');
  }

  console.log('stai nascondendo tutto',bottomCnt, km, age );
})