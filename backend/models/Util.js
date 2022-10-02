module.exports = {
    getDefaultUser: () => {
        return {
            name: "Dev",
            email: "dev@gmail.com",
            activity: [
                {
                    category: "sleep",
                    start: Date.now(),
                    duration: 10,
                }
            ],
        }
    }
}