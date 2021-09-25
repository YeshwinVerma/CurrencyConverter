const api = "https://api.exchangerate-api.com/v4/latest/USD";

const search = document.getElementById("search");
const fromcurrency = document.getElementById("from");
const tocurrency = document.getElementById("to");
const finalvalue = document.getElementById("value");

let resultfrom = "INR";
let resultto = "INR";
let searchvalue = "";

fromcurrency.addEventListener("change", (event) => {
  resultfrom = `${event.target.value}`;
  dis();
});

tocurrency.addEventListener("change", (event) => {
  resultto = `${event.target.value}`;
  dis();
});

search.addEventListener("input", (event) => {
  searchvalue = `${event.target.value}`;
  dis();
});

function dis() {
  fetch(`${api}`).then((currency) => {
    let f = currency.clone().json();
    f.then((fg) => {
      console.log(resultfrom);
      let from = fg.rates[resultfrom];
      let to = fg.rates[resultto];
      console.log(fg);
      console.log(((to / from) * searchvalue).toFixed(2));
      finalvalue.value = ((to / from) * searchvalue).toFixed(2);
    });
  });
}

// button.addEventListener("click", (event) => {
//   fetch(`${api}`).then((currency) => {
//     let f = currency.clone().json();
//     f.then((fg) => {
//       console.log(resultfrom);
//       let from = fg.rates[resultfrom];
//       let to = fg.rates[resultto];
//       console.log(fg);
//       console.log(((to / from) * searchvalue).toFixed(2));
//       finalvalue.value = ((to / from) * searchvalue).toFixed(2);
//     });
//   });
// });
