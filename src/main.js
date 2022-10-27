"use strict";

const selectElements = document.querySelectorAll("#json-datalist");
const flagImages = document.querySelectorAll("#flag");
const switchBtn = document.querySelector("#switch");

// Add all the countries to the select element
const getInfo = () => {
  const currencies = Object.entries(country_code);
  currencies.forEach((currency) => {
    const [countryCode, currencyCode] = currency;
    selectElements.forEach((select) => {
      const newOption = this.document.createElement("option");
      newOption.text = countryCode;
      newOption.value = currencyCode;
      select.appendChild(newOption);
    });
  });
};

// Get flags matching user's country choice
const getMatchingFlags = () => {
  selectElements.forEach((select) => {
    select.addEventListener("change", function () {
      const sibling = select.previousSibling;
      sibling.previousSibling.src = `https://flagcdn.com/${select.value}.svg`;
    });
  });
};

// Implementing swap;

window.addEventListener("load", getInfo);
window.addEventListener("load", getMatchingFlags);
