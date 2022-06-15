import { instance } from "./axios.config";

export const ProfileApi = {
    updateAvatar(data:any) {
        return instance.put(`/profile/avatar`, data).then(res => res.data);
    },
};