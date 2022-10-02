module.exports = {
    addActivityToUser: (user, activity) => {
        user.activity.push(activity);
    }
}