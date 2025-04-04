// Gravando uma sessão no javascript
localStorage.setItem('lastname','Smith'); // grava a sessão 'lastname' com valor 'Smith'
console.log(localStorage.getItem('lastname'));

// Removendo uma sessão específica em javascript
localStorage.removeItem('lastname'); // apaga a entrada "lastname"
console.log(localStorage.getItem('lastname'));

// Gravando outra sessão em javascript
localStorage.setItem('firstname','John'); // grava a sessão 'firstname' com valor 'John'
console.log(localStorage.getItem('firstname'));

// Limpando todas as sessões em javascript
localStorage.clear(); // apaga tudo o que está no local storage
console.log(localStorage.getItem('lastname'), localStorage.getItem('firstname'));
