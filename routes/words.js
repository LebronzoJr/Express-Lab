const express = require('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises; //Destructuring

router.get('/', (req, res)=>{
    res.send('Word Home Page');
});

router.get('/wotd', async (req, res) =>{
    let wordArray = await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    res.render('wotd',{word:word, part:part, definition:definition});
    //Do something with that function up here
});

router.get('/allwords', async(req,res)=>{
    const allWords = await getAllWords();
    res.render('allwords', {allwords:allWords});
    
});

let getWordFromDictionary = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');
        console.log(wordArray);
        return wordArray;
    } catch(err){
        console.log("There was an error reading the file:", err);
    }
};

let getAllWords = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let allwords = [];;
        let subObj = {word:word, part:part, definition:definition};
        allwords.push(subobj);
        for(line of lines){
            let [word, part, definition] = line.split('\t')
        }
        return allwords
    } catch(err){
        console.log("There was an error reading the file:", err);
    }
};
module.exports = router;