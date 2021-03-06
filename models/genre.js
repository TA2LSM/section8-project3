const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose.Schema bir class olduğu için "new" kullanıldı
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "At least 3 characters needed. You entered {VALUE}"],
    maxlength: [50, "Maximum 50 characters allowed. You entered {VALUE}"],
  },
});

// mongoose.model bir metot olduğu için "new" kullanılamaz!!!
// "genreSchema" yerine yukarıdaki koddaki {...} kısmı direkt olarak yazılabilir...
const Genre = mongoose.model("Genre", genreSchema);

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;
