





document.getElementById('btn_genera').addEventListener('click', function(){
  
  const km = document.getElementById('km_run').value;
  let prezzo = 0.21 * km;
  
  const select = document.getElementById("my-select");
  const selectedValue = select.value;

  if (selectedValue === 'minorenne') {
    prezzo -= (prezzo*20)/100;
  document.getElementById('output').innerHTML = "Biglietto Under18: " + prezzo.toFixed(2) + "&euro;";
  } 
  else if (selectedValue === 'standard') {
    document.getElementById('output').innerHTML =
  "Biglietto Standard: " + prezzo.toFixed(2) + "&euro;";
  } 
  else if (selectedValue === 'over') {
    prezzo -= (prezzo*40)/100;
  document.getElementById('output').innerHTML = "Biglietto Over65: " + prezzo.toFixed(2) + "&euro;";
  } 

  const bottomCnt = document.querySelector('.bottom_container')

  if(bottomCnt.classList.contains('hide')){
    bottomCnt.classList.remove('hide');
  }

  
  console.log("questi sono i dati dell'utente km", km, "-", selectedValue );
})

let vedoCnt = true;

document.getElementById('btn_canc').addEventListener('click', function(){

  const km = document.getElementById('km_run')
  km.value = "";

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