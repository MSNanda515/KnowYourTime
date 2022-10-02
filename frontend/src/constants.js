const BASE_URL = "http://localhost:3000/api/v1/";

module.exports = {
    getUrl: (endpoint) => (
        `${BASE_URL}${endpoint}`
    )
}
