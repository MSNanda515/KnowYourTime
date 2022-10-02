const User = require("../models/User")
const CategoryService = require("./CategoryService");
const ActivityService = require("./ActivityService");

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

    updateUser: async function(userId, newUser) {
        try {
            await User.findByIdAndUpdate(
                userId,
                newUser
            )
            return "";
        } catch (err) {
            return err.message;
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
        return await this.updateUser(userId, user);
    },

    getCategories: async function(userId) {
        let user = await this.getUser(userId);
        if (user === -1) {
            return [-1, "User not found"];
        }
        return [0, user.category];
    },

    addActivity: async function(userId, activity) {
        let user = await this.getUser(userId);
        if (user === -1) {
            return [-1, "User not found"];
        }
        ActivityService.addActivityToUser(user, activity)
        return await this.updateUser(userId, user);
    },

    getAllActivities: async function(userId) {
        let user = await this.getUser(userId);
        if (user === -1) {
            return [-1, "User not found"];
        }
        return [0, user.activity];
    },
}