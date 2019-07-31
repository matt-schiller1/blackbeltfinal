const mongoose = require('mongoose');
let Restaurant = mongoose.model('Restaurant');
let Review = mongoose.model('Review');

module.exports = {
  index: (req, res) => {
    Restaurant.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  add: (req, res) => {
    let newRestaurant = new Restaurant(req.body);
    newRestaurant.save(err => {
      if (err) {
        console.log("were getting here!!!!!" + err);

        res
          .status(400)
          .json(Object.keys(err.errors).map(key => err.errors[key].message)
          );

        // res.status(400).json("Restaurants have to be unique");


      } else {
        res.json({ Success: req.body });
        console.log("Restaurant Added!");
      }
    })
  },
  addReview: (req, res) => {
    let newReview = new Review(req.body);
    newReview.save(err => {
      if (err) {
        console.log("=================================" + newReview);
        console.log(err);
        res.status(400).json(Object.keys(err.errors).map(key =>
          err.errors[key].message)
        );
      } else {
        const restID = req.body.restID;
        Restaurant.findByIdAndUpdate({ _id: restID }, {
          $push: { reviews: newReview }
        }, function (err, data) {
          if (err) {
            res.json({ Error: err });
          } else {
            res.json({ Success: req.body });
          }
        })
      }
    })

  },
  update: (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRestaurant) => {
      if (err) {
        console.log(err);
        res.json(Object.keys(err.errors).map(key =>
          err.errors[key].message)
        );
      } else {
        res.json(updatedRestaurant);
      }
    })
  },
  display: (req, res) => {
    Review.find({ 'restID': req.params.id }).sort({ rating: -1 })
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        res.json({ Error: err })
      })
  },
  displaySingle: (req, res) => {
    Restaurant.findOne({ _id: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  destroy: (req, res) => {
    Restaurant.findByIdAndDelete(req.params.id)
      .then(deleteRestaurant => {
        res.json(deleteRestaurant)
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}
