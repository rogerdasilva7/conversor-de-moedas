const currencyFrom = document.querySelector("#currency-from");
const currencyTo = document.querySelector("#currency-to");
const startConvert = document.querySelector(".start-convert");
const value = document.querySelector("#value");
const convertButton = document.querySelector(".convert-button");

const conversionRate = {
  BRL: {
    USD: 0.175, 
    EUR: 0.1536, 
    GBP: 0.1301, 
  },
  USD: {
    BRL: 5.714,
    EUR: 0.8809,
    GBP: 0.7381,
  },
  EUR: {
    BRL: 6.5015,
    USD: 1.135,
    GBP: 0.8448, 
  },
  GBP: {
    BRL: 7.689,
    USD: 1.355,
    EUR: 1.184,
  },
};

const valueFormat = (value, moeda) => {
    let valueNumber = value.toLocaleString('pt-br', {style: 'currency', currency: moeda});
    return valueNumber;
}

const ratesOfValues = (value, convertFrom, convertTo) => {
    const rate = conversionRate[convertFrom][convertTo];
    const result = value * rate;
    return result;
}

convertButton.addEventListener("click", (e) => {
    let result = document.querySelector(".result-conversion");
    e.preventDefault();
    const currencyFromValue = currencyFrom.value;
    const currencyToValue = currencyTo.value;
    const valueConvert = value.value;
    let resultConvert = ratesOfValues(valueConvert, currencyFromValue, currencyToValue);
    result.style.color = "#B4B4B4";
    result.style.fontSize = "27px";
    result.style.textAlign = "center";
    let valueOption = valueFormat(resultConvert, currencyToValue);
    result.innerHTML = `Valor da conversão: ${valueOption}`;
})