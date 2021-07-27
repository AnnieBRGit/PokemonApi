const searchButton = document.querySelector('.searchButton');
const infoCard = document.querySelector('.infoCard');

searchButton.addEventListener('click', (e) => {
    let input = document.getElementById('userInput');
    let xhr = new XMLHttpRequest();
    
   //api test ok, responses ok

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${input.value}/`);
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.response);
            infoCard.innerHTML = `
            <div> 
            <img src="${response.sprites.other.dream_world.front_default}">
            <h1>${response.forms[0].name}</h1>
            <h2>${response.weight}</h2>           
            </div>
            `
        }
    }
    xhr.send();
})