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

    addDemoUser: async (req, res) => {
        const newUser = util.getDefaultUser();
        let dbRep = await UserService.createUser(newUser);
        if (dbRep === "") {
            res.status(201).json("Created Successfully: " + JSON.stringify(newUser))
        } else {
            res.status(500).json({ message: dbRep})
        }
    },
}