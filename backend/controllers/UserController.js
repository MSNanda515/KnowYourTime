const util = require("../models/Util");
const UserService = require("../services/UserService")

module.exports = {
    test: async (req, res) => {
        console.log(req.body);
        res.status(200).json({ message: "Hello" })
    },

    getCategories: async (req, res) => {
        let userId = req.params.userId;
        let resp = await UserService.getCategories(userId)
        if (resp[0] == -1) {
            res.status(500).json({message: resp[1]});
        } else {
            res.status(200).json({message: resp[1]});
        }
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

    addActivityLog: async (req, res) => {
        let activity = req.body.activity;
        let userId = req.params.userId;
        let resp = await UserService.addActivity(userId, activity);
        if (resp === "") {
            res.status(201).json("Created Successfully: " + JSON.stringify(activity))
        } else {
            res.status(500).json(resp);
        }
    },

    getActivities: async (req, res) => {
        let userId = req.params.userId;
        let resp = await UserService.getAllActivities(userId)
        if (resp[0] == -1) {
            res.status(500).json({message: resp[1]});
        } else {
            res.status(200).json({message: resp[1]});
        }
    },
}