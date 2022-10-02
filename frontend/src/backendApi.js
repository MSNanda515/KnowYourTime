import constants from "./constants";

const backendApi = {
    getCategories: async function(userId=1) {
        let endpoint = `user/${userId}/categories`
        let url = `${constants.getUrl(endpoint)}`;
        let resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const categories = await resp.json();
        return categories;
    },

    getActivities: async function() {
        let userId = constants.getUserId();
        let endpoint = `user/${userId}/activities`;
        let url = `${constants.getUrl(endpoint)}`;
        let resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        resp = await resp.json();
        const activities = resp.message;
        return activities;
    },
};

export default backendApi;