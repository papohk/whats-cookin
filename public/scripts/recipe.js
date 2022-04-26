// from: https://stackoverflow.com/questions/979975/get-the-values-from-the-get-parameters-javascript
const urlString = window.location.href;
const url = new URL(urlString);
// this stuff comes in from the URL parameters
// eg like youtube's video id comes in with ?v=....
// https://www.youtube.com/watch?v=tQu7itnRKik
// it knows what video you're trying to watch from the 'v' identifier
const id = url.searchParams.get("id");
const query = url.searchParams.get("query"); // "ramen,egg"
const searches = query.split(",")            // [ "ramen", "egg" ]
                    .map(it=>it.trim());

async function load(id) {
    const data = await infoAPI(id);
    // console.log(data);
    const title = data.title;

    document.getElementById("title").innerText = title;
    document.getElementById("instructions").innerText = data.instructions;
    document.getElementById("healthScore").innerText = data.healthScore;
    document.getElementById("readyTime").innerText = data.readyInMinutes;

    const ingredients = data.extendedIngredients;
    for (let i = 0; i < ingredients.length; i++) {
        addIngredient(ingredients[i]);
    }

}
load(id);

function addIngredient(ingredient) {
    let div = document.createElement("div");

    let color = "orange lighten-3";
    // highlight ingredients containing search terms
    for (let i = 0; i < searches.length; i++) {
        if (ingredient.original.includes(searches[i])) {
            color = "orange lighten-2";
        }
    }

    div.innerHTML = `<div class="card ${color}">
        ${ingredient.original}
     </div>`

    let list = document.getElementById("ingredients");
    list.appendChild(div);

}


function delay(ms) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(true); }, ms);
    })
}