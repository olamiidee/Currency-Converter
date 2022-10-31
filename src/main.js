"use strict";

const selectElements = document.querySelectorAll("#json-datalist");
const flagImages = document.querySelectorAll("#flag");
const switchBtn = document.querySelector("#switch");
const amount = document.querySelector("#amount");
const toAmount = document.querySelector(".to-amount");
const convertBtn = document.querySelector("#convert");

// Add all the countries to the select element
const getInfo = () => {
  const currencies = Object.entries(country_code);
  currencies.forEach((currency) => {
    const [countryCode, currencyCode] = currency;
    selectElements.forEach((select, i) => {
      select.classList.add(`select-${i + 1}`);
      const newOption = this.document.createElement("option");
      newOption.text = countryCode;
      newOption.value = countryCode;
      // newOption.value = currencyCode;
      select.appendChild(newOption);
    });
  });
};
// amount.addEventListener("input", function (e) {
//   const value = Number(e.target.value);
// });

// Get flags matching user's country choice
const getMatchingFlags = () => {
  selectElements.forEach((select) => {
    select.addEventListener("change", function () {
      const sibling = select.previousSibling;
      sibling.previousSibling.src = `https://flagcdn.com/${
        country_code[select.value]
      }.svg`;
    });
  });
};

// Implementing swap;

window.addEventListener("load", getInfo);
window.addEventListener("load", getMatchingFlags);

convertBtn.addEventListener("click", fetchCurrencies);
function fetchCurrencies() {
  let countryCode1, countryCode2;
  selectElements.forEach((select, i) => {
    const value = select.value;
    if (i > 0) countryCode2 = value;
    else countryCode1 = value;
  });
  if (amount.value === "") {
    alert("Please input a number");
    result.textContent = 0.0;
  }
  let amt = amount.value;
  fetch(
    `https://api.exchangerate.host/convert?from=${countryCode1}&to=${countryCode2}&amount=${amt}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toAmount.innerHTML = data.result.toFixed(3);
    });
}
