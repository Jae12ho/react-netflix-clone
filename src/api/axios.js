import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "2a1924446876d09b8e5888d6bb8fa78c",
        language: "ko-KR",
    },
});

export default instance;