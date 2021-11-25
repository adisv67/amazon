import axios from "axios";

const instance = axios.create({
    baseURL: "..." // cloude fun URL
});


export default instance;