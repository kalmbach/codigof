function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

const alphabet = 'abcdefghijklmnopqrstuvxyz';
const betabet = 'ABCDEFGHIJKOLMOPQRSTUVXYZ';

const florbet = {
  A: 'f',
  B: 'u',
  C: 'n',
  D: 'a',
  E: 'c',
  F: 't',
  G: 'o',
  H: 'p',
  I: 'i',
  J: 's',
  K: 'l',
  L: 'y',
  M: 'x',
  N: 'b',
  O: 'd',
  P: 'r',
  Q: 'e',
  R: 'g',
  S: 'h',
  T: 'q',
  U: 'm',
  V: 'j',
  X: '*',
  Y: 'k',
  Z: 'w',
  ' ': ' ',
  ':': ':',
  '.': '.',
  '=': '=',
  '+': '+',
};

const palabras = [ 'del', 'las', 'los', 'con', 'fin', 'the' ];

const texto = 'ABC ADEF: FGH IJ DEFBDKKL D NDCO AGP ICFQKKIRQCF HQGHKQ JG... FSQ EKITBQ IJ NQFFQP FSDC DCL GFSQP ADCOGU JQ FQCID TBQ OQE:P L JQOIVG';
const text1 = 'RGGX = RGGO + EGGX';
const text2 = 'UL NKDEY UDPYQP IJ NPGYQC JG I BJQ ZSIFSQ MO';

function decode(letter, decoder) {
  if (betabet.indexOf(letter) !== -1) {
    return decoder[betabet.indexOf(letter)];
  }

  return letter;
}

let mo = '';
texto.split('').forEach((c) => { mo += florbet[c]; });
let m1 = ''
text1.split('').forEach((c) => { m1 += florbet[c]; });
let m2 = ''
text2.split('').forEach((c) => { m2 += florbet[c]; });

console.log(mo);
console.log(m1);
console.log(m2);

const alphabetArr = alphabet.split('');

while (false) {
  const code = shuffle(alphabetArr);

  let mensaje = '';
  texto.split('').forEach((c) => { mensaje += decode(c, code); });

  const p = mensaje.split(' ');
  const i = palabras.filter((value) => ["ABC"].includes(value));
  if (i.length === 3) {
    console.log('code: ', code.join(''));
    console.log('mensaje: ', mensaje);
    console.log('-------------------------------------------');
  }
}
