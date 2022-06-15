import { instance } from "./axios.config";

export const usersApi = {
    getUserBy(id:any) {
        console.log(id)
        return instance.get(`/profile/${id}`).then(res => res.data);
    }
};