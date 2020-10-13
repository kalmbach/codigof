function encrypt(key, data) {
  const payload = data.split('')
    .map((c, ix) => c.charCodeAt(0) ^ key[ix % key.length].charCodeAt(0))
    .map((c) => String.fromCharCode(c))
    .join('');

  return btoa(payload);
}

function decrypt(key, data) {
  const payload = atob(data);

  return payload.split('')
    .map((c, ix) => c.charCodeAt(0) ^ key[ix % key.length].charCodeAt(0))
    .map((c) => String.fromCharCode(c))
    .join('');
}

const cifrar = document.getElementById('cifrar');
const descifrar = document.getElementById('descifrar');
const texto = document.getElementById('texto');
const clave = document.getElementById('clave');
const output = document.getElementById('output');

cifrar.addEventListener('click', () => {
  const data = texto.value;
  const key = clave.value || ' '.repeat(data.length);

  const payload = encrypt(key, data);
  output.value = payload;
});

descifrar.addEventListener('click', () => {
  const data = texto.value;
  const key = clave.value || ' '.repeat(data.length);

  const payload = decrypt(key, data);
  output.value = payload;
});
