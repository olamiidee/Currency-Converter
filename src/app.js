"use strict";

// Get data into select tag
const selectContainer = document.querySelector("#json-datalist-from");
const selectContainer2 = document.querySelector("#json-datalist-to");
const img2 = document.querySelector("#img1");

const getCountryCode = () => {
  const currency = country_code;
  return currency;
};
getCountryCode();

const displayCountryCode = (container) => {
  const currencies = getCountryCode();
  const data = Object.entries(currencies);
  data.forEach((arr) => {
    const [currency, code] = arr;
    const newOption = document.createElement("option");
    newOption.text = currency;
    newOption.value = code.toLowerCase();
    container.appendChild(newOption);
  });
  img1.src = ` https://flagcdn.com/w20/${selectContainer.value}.webp`;
  console.log(selectContainer.value);

  // const options = await getCountryCode();
  // const data = Object.keys(options);
  // console.log(data);
  // data.forEach((option) => {
  //   const newOption = document.createElement("option");

  //   newOption.text = option;
  //   container.appendChild(newOption);
  //   console.log(option.value);
  // });
};
displayCountryCode(selectContainer);
displayCountryCode(selectContainer2);

// // Get the <datalist> and <input> elements.
// var dataList = document.getElementById("json-datalist");
// var input = document.getElementById("from");

// // Create a new XMLHttpRequest.
// var request = new XMLHttpRequest();

// // Handle state changes for the request.
// request.onreadystatechange = function (response) {
//   if (request.readyState === 4) {
//     if (request.status === 200) {
//       // Parse the JSON
//       var jsonOptions = JSON.parse(request.responseText);

//       // Loop over the JSON array.
//       jsonOptions.forEach(function (item) {
//         // Create a new <option> element.
//         var option = document.createElement("option");
//         // Set the value using the item in the JSON array.
//         option.value = item;
//         // Add the <option> element to the <datalist>.
//         dataList.appendChild(option);
//       });

//       // Update the placeholder text.
//       input.placeholder = "USD";
//     } else {
//       // An error occured :(
//       input.placeholder = "Couldn't load datalist options :(";
//     }
//   }
// };

// // Update the placeholder text.
// input.placeholder = "Loading options...";

// // Set up and make the request.
// request.open(
//   "GET",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json",
//   true
// );
// request.send();

// // input.addEventListener("click", from);
// // function from() {
// //   const options = {
// //     method: "GET",
// //     headers: {
// //       "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
// //       "X-RapidAPI-Host":
// //         "currency-conversion-and-exchange-rates.p.rapidapi.com",
// //     },
// //   };

// //   fetch(
// //     "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=USD&to=EUR&amount=750",
// //     options
// //   )
// //     .then((response) => response.json())
// //     .then((response) => console.log(response))
// //     .catch((err) => console.error(err));
// // }
