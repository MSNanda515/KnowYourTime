const User = require("../models/User")
const CategoryService = require("./CategoryService");

module.exports = {
    createUser: async function(newUser) {
        try {
            const createdItem = await User.create(newUser)
            return "";
        } catch (err) {
            return err.message;
        }
    },

    getUser: async function(userId) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                return -1;
            }
            return user;
        } catch (err) {
            return -1;
        }
    },

    addCategories: async function(userId, newCategories) {
        let user = await this.getUser(userId);
        if (user === -1) {
            return "User not found";
        }
        for (let c of newCategories) {
            CategoryService.addCategoryToUser(user, c);
        }
        // update the user doc
        try {
            await User.findByIdAndUpdate(
                userId,
                user
            )
            return "";
        } catch (err) {
            return err.message;
        }
    },
}