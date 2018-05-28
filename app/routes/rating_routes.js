var rating = require('../models/rating');

module.exports = function (app) {

    app.disable('etag');

    // get a rating by card name
    app.get('/api/rating/:name', function (req, res) {
        var name = '^' + req.params.name + '$';

        rating.findOne({
            'name': {
                '$regex': name,
                $options: 'i'
            }
        }, function (err, rating) {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            }

            res.json(rating);
        })
    });
};