var oneLinerJoke = require('one-liner-joke');

exports.jokesGenerator = function jokesGenerator(numberOfJokes) {

    let jokesArray = [];

    for(let i = 0; i < numberOfJokes; i++) {
        let getRandomJoke = oneLinerJoke.getRandomJoke();

        jokesArray[i] = getRandomJoke;
    }

    return jokesArray;
}

exports.printAllJokes = function printAllJokes(jokesArray) {
    for(let i = 0; i < jokesArray.length; i++) {
        console.log(`---------- Joke ${i} ----------`);
        console.log(jokesArray[i].body);
        console.log(jokesArray[i].tags);
        console.log(`---------- ;-))) --------------`);
    }
}