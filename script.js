console.log(window.location.href)

let typoSelector = document.querySelector("#typoContainer p")

const info = require('bapt/baptiste.json');
console.log(JSON.parse(info)) // should output valid data

typoSelector.innerHTML(info.textForExample)