module.exports = {
    addCategoryToUser: (user, category) => {
        let doesCatExist = false;
        for(let c of user.category) {
            if (c.name === category.name) {
                doesCatExist = true;
                return;
            }
        }
        user.category.push(category);
    }
}