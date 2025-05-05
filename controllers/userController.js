const { userSchema } = require('../validations/userValidation');
const UserService = require('../services/userService');
const { error } = require('console');

class UserController {
  static async createUser(req, res) {
    try {
      const { error } = userSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUserByID(req,res){
    const { id } = req.params;

    try{
        const user = await UserService.getUserByID(id);
        res.status(200).json(user)
    } catch(err){
        res.status(404).json({"error": err.message});
    }
  }

  static async deleteUserByID(req, res) {
    const { id } = req.params;
    
    try {
        const deletedUser = await UserService.deleteUserByID(id); 
        res.status(200).json(deletedUser);
    } catch (error) {
       
        res.status(404).json({ error: error.message }); 
    }
}
}

module.exports = UserController;
