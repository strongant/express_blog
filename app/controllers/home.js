var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'NodeBlog Home',
      articles: articles,
      pretty:true
    });
  });
});
router.get('/concat', function (req, res, next) {
    res.render('blog/index', {
      title: '联系我',
      pretty:true
    });
});
router.get('/about', function (req, res, next) {
    res.render('blog/index', {
      title: '关于我',
      pretty:true
    });
});
