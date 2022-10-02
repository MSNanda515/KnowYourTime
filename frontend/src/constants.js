const BASE_URL = "http://localhost:3000/api/v1/";

const constants = {
    getUrl: (endpoint) => (
        `${BASE_URL}${endpoint}`
    )
}

export default constants;
