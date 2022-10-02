const util = require("../models/Util");
const UserService = require("../services/UserService")

module.exports = {
    test: async (req, res) => {
        console.log(req.body);
        res.status(200).json({ message: "Hello" })
    },

    addActivity: async (req, res) => {
        console.log(req.body);
        res.status(200).json({ message: req.body })
    },


}