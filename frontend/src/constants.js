const BASE_URL = "http://localhost:3000/api/v1/";

const constants = {
    getUrl: (endpoint) => (
        `${BASE_URL}${endpoint}`
    ),

    getUserId: () => {
        return "6339b3832be4341f1b4152c5";
    },
    getHour: (sec) => (
        ("0" + Math.floor(sec / 3600)).slice(-2)
    ),

    getMin: (sec) => (
        ("0" + Math.floor(sec % 3600 / 60)).slice(-2)
    ),

    getSec: (sec) => (
        ("0" + (sec % 3600 % 60)).slice(-2)
    ),

}

export default constants;
