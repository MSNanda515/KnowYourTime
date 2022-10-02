const User = require("../models/User")

module.exports = {
    createUser: async function(newUser) {
        try {
            const createdItem = await User.create(newUser)
            return "";
        } catch (err) {
            return err.message;
        }
    },
}