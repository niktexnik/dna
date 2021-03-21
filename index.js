window.onload = function () {
function dna_rna(input) {
  let result = [];
  for (let char of input) {
    console.log(`char :`, char)
    let convertedChar
    switch (char) {
      case 'G':
        convertedChar = 'C';
        break;
      case 'C':
        convertedChar = 'G';
        break;
      case 'T':
        convertedChar = 'A';
        break;
      case 'A':
        convertedChar = 'U';
        break;
    }
    result.push(convertedChar);
  }
  return result.join('');
};

let form = document.forms.my;
let input = document.getElementById("dnarna");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form was submitted!");
  let str = input.value.toUpperCase();  
  let result = dna_rna(str);
  console.log('result :', result);
  document.querySelector('#resultSpan').innerHTML = result;
});
}