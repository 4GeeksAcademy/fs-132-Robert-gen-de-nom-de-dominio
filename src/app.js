import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon','lynxes'];
  let extens = ['.com', '.es','.net','.er','.on']
// usamos la primera letra para cada array en el 'let x of'
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun){
        for (let e of extens) {
          let nomdomine = p + a + n + e;
          console.log(nomdomine)
        }
      }
    }
  }
console.log('-----------------con el hack:---------------')
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun){
        for (let e of extens) {
        //cortar las 2 ultimas letras
          let last2 = n.slice(-2);
        // coger las dos letras despues '.' ab
        let first2 =e.slice(1);
        let nomdomines;
        // si coincide se fusionan
        if (last2 === first2) {
          nomdomines = p + a + n.slice(0, -2) + e;
        }
        else {
          // si no como siempre
          nomdomines = p + a + n + e;
        }
          console.log(nomdomines)
        }
      }
    }
  }