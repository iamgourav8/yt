var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

// 
var fetchVideoInfo = require('updated-youtube-info');
// 

// import youtube from 'scrape-youtube';
const youtube = require('scrape-youtube').default;

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'No Compair',
  });
})

router.post('/goni', (req, res) => {
  var link = req.body.link
  link = link.split('=')
  link = link[1]


  // Retrieve video info
  fetchVideoInfo(link).then(function (videoInfo) {
    var rank = Math.floor(Math.random() * 3 + 1)
    var newTitle = videoInfo.title
    newTitle = newTitle.split('|')
    newTitle = newTitle[0]
    youtube.search(newTitle).then((results) => {

      var ans = results.videos
      res.render('goni', {
        title: 'Solfinn',
        heading: 'Results',
        goni: ans,
        rand: rank,
        myThumb: videoInfo.thumbnailUrl,
        myPublish: videoInfo.datePublished,
        myTitle: videoInfo.title,
        myViews: videoInfo.views,
        myLink: videoInfo.url,
        resultsForTitle: newTitle
      })
    });

    // console.log(newTitle);
    // console.log(link)
    // console.log(rank)

  });


  // video tags
  router.get('/tags', function (req, res, next) {

    res.render('tag', {
      title: 'No Compair',
    });
  })

});

module.exports = router;