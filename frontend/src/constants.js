const BASE_URL = "http://localhost:3000/api/v1/";

const constants = {
    getUrl: (endpoint) => (
        `${BASE_URL}${endpoint}`
    ),

    getUserId: () => {
        return "6339b3832be4341f1b4152c5";
    }
}

export default constants;
