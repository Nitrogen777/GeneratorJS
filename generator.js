const words = require('an-array-of-english-words')
const loop = Number(process.argv[2])

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateNewJavascriptFramework(words) {
    let word = words[Math.floor(Math.random() * words.length)];
    return capitalizeFirstLetter(word) + "JS"
}

for(var i = 0; i < loop; i++){
    console.log(generateNewJavascriptFramework(words))
}


