
const char = document.querySelector("#char");
const state = document.querySelector("#state");
const race = document.querySelector("#race");
const locat = document.querySelector("#location")
const image = document.querySelector("#image")
let valor = 1;

function person(valor) {
    axios.get(`https://rickandmortyapi.com/api/character/${valor}`)
        .then(response => {
            char.innerHTML = response.data.name
            state.innerHTML = response.data.status
            race.innerHTML = response.data.species
            locat.innerHTML = response.data.location.name
            image.src = response.data.image
            image.style.width = "100%"
            image.style.height = "100%"
        })
        .catch(error => console.log(error));
}

function contador() {
    valor++
    person(valor)
}

function contadorRetorno() {
    valor--
    if (valor == 0) {
        window.location.href = "index.html"
    }
    else
        person(valor)
}

// tem que arrimar isso
instance.interceptors.response.use((response) => {
    return parseBody(response)
  }, error => {
    console.warn('Error status', error.response.status)
    // return Promise.reject(error)
    if (error.response) {
      return parseError(error.response.data)
    } else {
      return Promise.reject(error)
    }
  })

















// instance.interceptors.response.use((response) => {
//     return parseBody(response)
//   }, error => {
//     console.warn('Error status', error.response.status)
//     // return Promise.reject(error)
//     if (error.response) {
//       return parseError(error.response.data)
//     } else {
//       return Promise.reject(error)
//     }
//   })


// function person(valor) {

//     const url = `https://rickandmortyapi.com/api/character/${valor}`
//     return fetch(url)
//         .then((response) => response.json())
//         .then((jsonBody) => {
//         console.log(jsonBody.name)
//         char.innerHTML = jsonBody.name
//         state.innerHTML = jsonBody.status
//         race.innerHTML = jsonBody.species
//         locat.innerHTML = jsonBody.location.name
//         image.src = jsonBody.image
//         image.style.width = "100%"
//         image.style.height = "100%"
//         })

// }

// function contador(){
//     valor++
//     person(valor)
// }

// function contadorRetorno(){
//     valor--
//     if (valor == 0){
//         window.location.href = "index.html"
//     }
//     else
//         person(valor)
// }
