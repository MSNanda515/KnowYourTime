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
};

export default backendApi;