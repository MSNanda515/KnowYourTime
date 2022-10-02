const util = require("../models/Util");
const UserService = require("../services/UserService")

module.exports = {
    test: async (req, res) => {
        console.log(req.body);
        res.status(200).json({ message: "Hello" })
    },

    getCategories: (req, res) => {
        let userId = req.params.userId;

        res.status(200).json();
    },

    addCategories: (req, res) => {
        let userId = req.params.userId;

        res.status(200).json();
    },

    addDefaultCategories: async (req, res) => {
        let userId = req.params.userId;
        let categories = util.getDefaultCategories();
        let resp = await UserService.addCategories(userId, categories);
        if (resp !== "") {
            res.status(500).json({message: resp});
        } else {
            res.status(200).json({message: "Done"});
        }
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