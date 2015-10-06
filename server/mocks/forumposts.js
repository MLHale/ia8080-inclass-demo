module.exports = function(app) {
  var express = require('express');
  var forumpostsRouter = express.Router();

  forumpostsRouter.get('/', function(req, res) {
    res.send({
      'forumposts': [ 
        {
          id: 1,
          title: "testtitle1",
          content: "testcontent1",
          author: "testauthor1",
          upvotes: 1,
        },
        {
          id: 2,
          title: "testtitle2",
          content: "testcontent2",
          author: "testauthor2",
          upvotes: 2,
        },
        {
          id: 3,
          title: "testtitle3",
          content: "testcontent3",
          author: "testauthor3",
          upvotes: 3,
        },

      ]
    });
  });

  forumpostsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  forumpostsRouter.get('/:id', function(req, res) {
    res.send({
      'forumposts': {
        id: req.params.id
      }
    });
  });

  forumpostsRouter.put('/:id', function(req, res) {
    res.send({
      'forumposts': {
        id: req.params.id
      }
    });
  });

  forumpostsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/forumposts', forumpostsRouter);
};
