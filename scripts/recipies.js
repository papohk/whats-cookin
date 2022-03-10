const recipes = [
    {
        name: "Simple Bean Burritos",
        image: "./images/istockphoto-576586906-612x612.jpg",
        ingredients: [
            "pinto beans", 
            "long-grain rice", 
            "flour tortillas", 
            "shredded cheese"
        ],
        
    },
    {
        name: "Spicy Pork HotPot",
        image: "./images/istockphoto-576586906-612x612.jpg",
        ingredients:[
            "pork",
            "bok choy",
            "onions",
            "rice cakes",
        ]
    },
    {
        name: "Pork Burritos",
        image: "./images/istockphoto-576586906-612x612.jpg",
        ingredients:[
            "pork",
            "beans",
            "rice",
        ]
    },
]
const emptyRecipe = {
    name: "",
    image: "images/istockphoto-1309116531-612x612.jpg",
    ingredients: "please enter a search term to see matching recipies"
}
const noMatchesRecipe = {
    name: "",
    image: "images/istockphoto-1309116531-612x612.jpg",
    ingredients: "no matching recipes :("
}

/* Ternary operator compresses if statement into one line
let value;
if (condition) {
    value = (value if true);
} else {
    value = (value if false);
}
let value = (condition) ? (value if true) : (value if false)
//*/

function clickSearch() {
    let query = document.getElementById("query").value;
    console.log(query)
    let anyOrAll = document.getElementById("anyOrAll").checked ? "all" : "any";
    let results = search(query, anyOrAll);
    clearList();
    for (let i = 0; i < results.length; i++) {
        render(results[i]);
    }
}
clickSearch(); // shows empty search message

function search(query, anyOrAll = "any") {
    // "Pork, Onions"
    query = query.toLowerCase();
    if (query.trim().length == 0) { 
        return [emptyRecipe];
    }
    // "pork, onions"
    let splits = query.split(',')
        .map(it => it.trim());
    // [ "pork", " onions" ] before trim
    // [ "pork", "onions" ] after trim
    let matched = []

    // Loop over each recipe
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        
        let match = 0;
        // Loop over each ingredient in the recipie
        for (let k = 0; k < recipe.ingredients.length; k++) {
            // Loop over all search criteria
            for (let j = 0; j < splits.length; j++) {
                // if we find search terms in the ingredient
                if (recipe.ingredients[k].includes(splits[j])) {
                    // flag the recipe as a match
                    match++;
                    break;
                }

            }
        }
        if (anyOrAll == "all") {
            if (match == splits.length) {
                matched.push(recipe);
            }
        } else {
            // if the recipe was flagged as a match, add it
            if (match >= 1) {
                matched.push(recipe);
            }
        }

    }
    if (matched.length == 0) {
        return [noMatchesRecipe]
    }

    return matched;
}


function clearList() {
    let list = document.getElementById("list")
    list.innerHTML = "";
}

function render(recipe) {
    let div = document.createElement('div')
    div.innerHTML = `<div class="col s12 m6">
    <div class="card medium orange lighten-3">
        <div class="card-image">
            <img src="${recipe.image}">
            <span class="card-title">${recipe.name}</span>
        </div>
        <div class="card-content">
            ${recipe.ingredients}
        </div>
        <div class="card-action">
            <a class="blue-text" href="#">Find out more!</a>
        </div>
    </div>
</div>`
    let list = document.getElementById("list")
    list.appendChild(div);
    
}

console.log(search("pork, Onion"), "all")