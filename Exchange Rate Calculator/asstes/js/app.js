// All Currency Input & amount id grap 
let currencyOne = document.getElementById('currency-one');
let amountOne = document.getElementById('amount-one');
let currencyTwo = document.getElementById('currency-two');
let amountTwo = document.getElementById('amount-two');

// Get Rate & Swap Element Grap
let swapBtn = document.getElementById('swap');
let rateElm = document.getElementById('rate');


// Exchange Api 
function getExchangeRate(){
    // fetch data 
    let exchangeApi = 
    `https://v6.exchangerate-api.com/v6/9373bddb05da1b19cd191faa/latest/${currencyOne.value}`;

    fetch(exchangeApi)
    .then(function(response){
            return response.json();
    })
    .then(function (data) {
        let rate = data.conversion_rates[currencyTwo.value];
        rateElm.innerText = `1 ${currencyOne.value} = ${rate} ${currencyTwo.value}`;
        
        amountTwo.value = (rate * amountOne.value).toFixed(2);
    });

};

// swap currency
function swapCurrency(){
    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    // call function change value currency two
    getExchangeRate();
} 

// Add Event Listener
currencyOne.addEventListener('change', getExchangeRate);
currencyTwo.addEventListener('change', getExchangeRate);
amountOne.addEventListener('input', getExchangeRate);

// Click To Change Currency One by Two & Two By One
swapBtn.addEventListener('click', swapCurrency)

// Onload Function 
window.onload = function(){
    getExchangeRate();
}