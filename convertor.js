const converter = document.querySelector('#convertor');// first element with id of convertor
const result = document.querySelector('.result');// first element with class of result
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.celsius');
const F = document.querySelector('.fahrenheit');

const swap = () => {
  if (C.innerHTML === '°C') {
    C.innerHTML = '°F';
    F.innerHTML = '°C';
    converter.placeholder = "Temperature in °F";
  } else {
    F.innerHTML = '°F';
    C.innerHTML = '°C';
    converter.placeholder = "Temperature in °C";
  }
};

const reset = () => {
  converter.value = '';
  result.innerHTML = '';
};

const convert = () => {
  if (/^(-?)(\d+)(\.\d+)?$/.test(converter.value)) {
    result.style.color = "black";
    if (C.innerHTML === '°C') {
      let value = (converter.value * 1.8) + 32;
      result.innerHTML = `${converter.value} °C is equal to ${value.toFixed(2)}°F`;
    } else {
      let value = (converter.value - 32) / 1.8;
      result.innerHTML = `${converter.value} °F is equal to ${value.toFixed(2)}°C`;
    }
  } else if (converter.value === "") {
    result.style.color = "#993300";
    result.innerHTML = 'Enter some number';
  } else {
    result.style.color = "#993300";
    result.innerHTML = 'Enter some number';
  }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);
