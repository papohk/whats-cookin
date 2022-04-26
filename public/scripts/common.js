const emptyRecipe = {
    title: "",
    image: "images/istockphoto-1309116531-612x612.jpg",
    description: "please enter a search term to see matching recipies"
}
const noMatchesRecipe = {
    title: "",
    image: "images/istockphoto-1309116531-612x612.jpg",
    description: "no matching recipes :("
}

const urlBase = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
const API_KEY = {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "c875253e6amsh90b2116ea90598fp17a369jsn02e65b827c0d"
};

/* Ternary operator compresses if statement into one line
let value;
if (condition) {
    value = (value if true);
} else {
    value = (value if false);
}
let value = (condition) ? (value if true) : (value if false)
//*/
function onkey(e) {
    // check that the key that was hit was Enter
    if (e.key=="Enter") {
        // If it was Enter, act as if the search button was clicked
        clickSearch();
    }
}



// runs this code when the user clicks the search button
async function clickSearch() {
    let query = document.getElementById("query").value;
    console.log("The user type in",query);
    //let results = search(query, anyOrAll);
    clearList();
    if (query.trim() == "") { // show hint when empty
        render(emptyRecipe);
        return;
    }

    let results = await searchAPI(query); 
    if (results.length == 0) {// show hint when nothing matches
        render(noMatchesRecipe);
        return;
    }

    for (let i = 0; i < results.length; i++) {
        render(results[i], query);
    }
}


function clearList() {
    let list = document.getElementById("list")
    list.innerHTML = "";
}

function render(recipe, query) {
    let div = document.createElement('div')
    div.innerHTML = `<div class="col s12 m6">
    <div class="card small orange lighten-3">
        <div class="card-image">
            <img src="${recipe.image}">
            <span class="card-title">${recipe.title}</span>
        </div>
        <div class="card-content">
            ${recipe.description||""}
        </div>
        <div class="card-action">
            <a class="blue-text" href="recipe.html?id=${recipe.id}&query=${query}">Find out more!</a>
        </div>
    </div>
</div>`
    let list = document.getElementById("list")
    list.appendChild(div);
    
}

async function searchAPI(ingredients) {
    // build URL for API endpoint we want to hit
    let url = urlBase + "/recipes/findByIngredients";

    // add parameters to URL
    url += "?ingredients=" + ingredients;
    url += "&number=9";

    // Make the request to the API endpoint, and wait for result
    let result = await fetch(url, {
        method: "GET",
        headers: API_KEY
    })
    
    // Parse result from response in JSON format
    let json = await result.json();
    console.log(json);
    // return array of results back to caller
    return json;
}
//searchAPI("tofu, cheese")


// Copied code from https://rapidapi.com/spoonacular/api/recipe-food-nutrition
async function infoAPI(id) {
    var result = await fetch(urlBase+"/recipes/"+id+"/information", {
        "method": "GET",
        "headers": API_KEY,
    })
    var json = await result.json();
    console.log(json);
    return json;
}

//callAPI();
