const axios = require('axios');
const {apiKey} = require('../config');

let techArticles = [];
let savedArticles = [];
let polygonArticles = [];
let buzzfeedArticles = [];
let axiosArticles = [];


const getTechArticles = (req,res,next) => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=${apiKey}`)
    .then(response => {
        techArticles.push(response.data.articles);
        res.json(techArticles[0]);
        // console.log("this is the array:",techArticles[0])
    })
    .catch(error => console.log(error));
}
const getPolygon = (req,res,next) => {
    axios.get(`https://newsapi.org/v2/everything?sources=polygon&apiKey=${apiKey}`)
    .then(response => {
        polygonArticles.push(response.data.articles);
        res.json(polygonArticles[0]);
})
    
}
const getBuzzfeed = (req,res,next) => {
    
}
const getAxiosNews = (req,res,next) => {
    axios.get(`https://newsapi.org/v2/everything?sources=axios&apiKey=${apiKey}`)
    .then(response => {
        axiosArticles.push(response.data.articles);
        res.json(axiosArticles[0]);
})
}

const saveArticle = (req,res,next) => {
    savedArticles.push(req.body);
    // console.log("this is saved response req.body",req.body);
    res.status(200).json({message:"Saved"})
    // console.log(savedArticles)
}
const getSavedArticles = (req,res,next) => {
    res.status(200).json(savedArticles)
}
const deleteSavedArticle = (req,res,next) => {
    console.log('this is perams:', req.params.index)
    savedArticles.splice(req.params.index,1);
    res.status(200).json(savedArticles)
}

module.exports = {
    getTechArticles:getTechArticles,
    getSavedArticles:getSavedArticles,
    saveArticle:saveArticle,
    deleteSavedArticle:deleteSavedArticle,
    getPolygon:getPolygon,
    getBuzzfeed:getBuzzfeed
}