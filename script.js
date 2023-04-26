let cards = document.querySelector("cards");
let id = new URLSearchParams(location.search).get("id");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let address = document.querySelector("#address");
let phone = document.querySelector("#phone");
let company = document.querySelector("#company");

let API_URL = 'https://jsonplaceholder.typicode.com/users';
console.log(fetch(API_URL));

fetch(API_URL).then((res) =>res.json())