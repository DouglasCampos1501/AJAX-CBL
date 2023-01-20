const char = document.querySelector("#char");
const state = document.querySelector("#state");
const race = document.querySelector("#race");
const locat = document.querySelector("#location")
const image = document.querySelector("#image")
let valor = 0;

function person(valor) {

    const url = `https://rickandmortyapi.com/api/character/${valor}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => {
        console.log(jsonBody.name)
        char.innerHTML = jsonBody.name
        state.innerHTML = jsonBody.status
        race.innerHTML = jsonBody.species
        locat.innerHTML = jsonBody.location.name
        image.innerHTML = `<img id="image" class="imgBack" src="${jsonBody.image}">`
 
        })

}

function contador(){
    valor++
    person(valor)
}






