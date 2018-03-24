const axios = require('axios');
const {apiKey} = require('../config');

let techArticles = [];
let savedArticles = [];

const getTechArticles = (req,res,next) => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=${apiKey}`)
    .then(response => {
        techArticles.push(response.data.articles);
        res.json(techArticles[0]);
        // console.log("this is the array:",techArticles[0])
    })
    .catch(error => console.log(error));
}
const saveArticle = (req,res,next) => {
    savedArticles.push(req.body);
    // console.log("this is saved response req.body",req.body);
    res.status(200).json({message:"Saved"})
    console.log(savedArticles)
}
const getSavedArticles = (req,res,next) => {
    res.status(200).json(savedArticles)
}

module.exports = {
    getTechArticles:getTechArticles,
    getSavedArticles:getSavedArticles,
    saveArticle:saveArticle
}