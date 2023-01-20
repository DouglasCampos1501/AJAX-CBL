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
        image.src = jsonBody.image 
        image.style.width = "100%"
        image.style.height = "100%"
        })

}

function contador(){
    valor++
    person(valor)
}

function contadorRetorno(){
    valor--
    if (valor == 0){
        valor = 1
        person(valor)
    }
    else
        person(valor)
}





