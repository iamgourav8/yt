var express = require('express');
var router = express.Router();
// var index = require('./index')

// import youtube from 'scrape-youtube';
const youtube = require('scrape-youtube').default;


/* GET users listing. */
router.get('/', function (req, res, next) {
  youtube.search('Despacito').then((results) => {
  //   //   // Unless you specify a type, it will only return 'video' results
  var size = 5
  var ans = results.videos
  res.render('ans', {
    title: 'Indexing',
    ans: ans,
    // link: link
  });
  });
});

// youtube.search('Short Change Hero').then((results) => {
//   // Unless you specify a type, it will only return 'video' results
//   console.log(results.videos);
// });

module.exports = router;