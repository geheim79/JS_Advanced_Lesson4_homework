
const inputFahrenheit = document.getElementById('inputFahrenheit')
const outputCelcius = document.getElementById('outputCelcius')

//из Фаренгейта в Цельсий 	℃=(℉-32)/1.8
function fromFtoCConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}

// Цельсия в Кельвин  K=℃+273.15
function fromCtoKConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML= valNum+273.15;
}


// из Цельсия в Фаренгейт  ℉=(℃*1.8)+32
function fromCtoFConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}

