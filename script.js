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
            <h2> Name: ${response.forms[0].name}</h2>
            <p> Weight: ${response.weight}</p> 
            <p> Height: ${response.height}</p>           
            </div>
            `
        }
        document.getElementById('userInput').value="";
    }
    xhr.send();
})