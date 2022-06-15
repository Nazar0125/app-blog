import { instance } from "./axios.config";

export const AuthApi = {
    auth(data:any) {
        return instance.post(`/auth/signin`, data).then(res => res.data);
    },
    registration(data:any) {
        return instance.post(`/auth/signup`, data).then(res => res.data);
    }
};