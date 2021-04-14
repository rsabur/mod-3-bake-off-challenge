// your code here!
console.log("🥧")

const bakesCollection = document.querySelector('#bakes-container')

function getAllBakedGoods() {
    fetch('http://localhost:3000/bakes')
        .then(resp => resp.json())
        .then(bakesArr => {
            bakesArr.forEach(seeAllBakedGood)
                detailedBakesHelper(bakesArr[0])
            })
}

function seeAllBakedGood(bakesObj) {
    // console.log(bakesObj)
    const outerDiv = document.createElement('li.item')
    outerDiv.dataset.id = bakesObj.id

    outerDiv.innerHTML = `
    <li class="item" data-id="${bakesObj.id}">${bakesObj.name}</li>
    `
    bakesCollection.append(outerDiv)
}


bakesCollection.addEventListener('click', event => {
    if(event.target.matches('li.item')) selectedBakes(event.target)
})

function selectedBakes(bakeElement) {
    // console.log(bakeElement)
    fetch(`http://localhost:3000/bakes/${bakeElement.dataset.id}`)
        .then(resp => resp.json())
        .then(bake => detailedBakesHelper(bake))
}


function detailedBakesHelper(aSingleBake) {

    const bakesDetails = document.querySelector('#detail')

    const bakesImage = bakesDetails.querySelector('img')
    bakesImage.src = aSingleBake.image_url
    bakesImage.alt = aSingleBake.name
    
    const bakesName = bakesDetails.querySelector('h1')
    bakesName.textContent = aSingleBake.name
    
    const bakesDesc = bakesDetails.querySelector('p.description')
    bakesDesc.textContent = aSingleBake.description
    
    const bakesScore = bakesDetails.querySelector('#score-form input')
    bakesScore.value = aSingleBake.score

}
    // console.log(bakesScore)

// function createNewBake() {
//     const bakeFormBtn = document.querySelector('#new-bake-form')

//     bakeFormBtn.addEventListener('submit', event => {
//         event.preventDefault()
        
//         const name = event.target.name.value
//         const image = event.target.image_url.value
//         const description = event.target.description.value

//         fetch(`http://localhost:3000/bakes/`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({name, image, description})
//         })
//         .then(resp => resp.json())

//     })
// }





//-----APP Init-----//
getAllBakedGoods()
// createNewBake()