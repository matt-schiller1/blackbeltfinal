const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "Name must be at least three characters"],
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
    minlength: [3, "Review must be at least three characters"],
  },
  restID: {
    type: String,
  }
}, { timestamps: true, })

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Restaurant names must contain at least three characters!"],
  },
  cuisine: {
    type: String,
    required: true,
    minlength: [3, "Cuisine must be at least 3 characters"],
  },
  reviews: [ReviewSchema],
}, { timestamps: true })

RestaurantSchema.plugin(uniqueValidator, { message: 'Restaurant name must be unique' });
mongoose.model("Review", ReviewSchema);
mongoose.model("Restaurant", RestaurantSchema);

