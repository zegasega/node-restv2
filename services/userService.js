const User = require('../models/user');

class UserService {
  static async createUser(data) {
    const user = await User.create(data);
    return user;
  }

  static async getAllUsers() {
    const users = await User.findAll();
    return users;
  }

  static async getUserByID(id){

    const user = await User.findByPk(id);
    if (!user){
        throw new Error("User not found");
    }
    return user;

  }

  static async deleteUserByID(id){
    const user = await User.findByPk(id);

    if (!user){
        throw new Error("User not found");
    }
    const deletedUser = await user.destroy();
    return {"message": "User Succesfully Delete", "user": deletedUser};
  }

  
}

module.exports = UserService;
