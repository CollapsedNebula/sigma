import axios from "axios";

export const instance = axios.create({
    baseURL: "https://localhost:8080/api/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});
