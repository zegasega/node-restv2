const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

module.exports = { userSchema };

// her crud islemi icin yeni bir validation yaziyor mesela update user yaparken farki validation yapabilirmiyiz
// bir model icin (user) tek bir validation yazilip kullanilabilirmi
//