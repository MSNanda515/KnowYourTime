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
    },

    getDefaultCategories: () => {
        return [
            {
                name: "Sleep",
                icon: "brain",
                color: "black",
            },
            {
                name: "Study",
                icon: "city",
                color: "blue",
            },
        ]
    }
}