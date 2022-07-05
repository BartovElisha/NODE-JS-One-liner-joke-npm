// My First Node Js Application Jokes Generator !!!

let jokes = require('./modules/jokesGenerator');

let jokesArray = jokes.jokesGenerator(20);
jokes.printAllJokes(jokesArray)