const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const axios = require('axios');


const port = 3001;

const app = express();

app.use(json());
app.use(cors());

const { getTechArticles,getSavedArticles,saveArticle, deleteSavedArticle,getPolygon,getBuzzfeed,getAxiosNews } = require(`${__dirname}/controllers/mainController`)

app.get('/api/gettech', getTechArticles);
app.get('/api/getPolygon',getPolygon);
app.get('/api/getBuzzfeed',getBuzzfeed);
app.get('/api/getAxiosNews',getAxiosNews)
app.get('/api/getSaved',getSavedArticles);
app.post('/api/saveArticle',saveArticle);
app.delete('/api/deleteSaved/:index',deleteSavedArticle);







app.listen(port,()=>{
    console.log(`listening on mobile ${port}`)
});