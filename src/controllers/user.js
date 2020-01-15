const User = require("../models/user");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }
};
