import { instance } from "./axios.config";

export const uploadApi = {
    upload(data:any) {
        return instance.post(`/upload`, data).then(res => res.data);
    },
    avatar(data:any) {
        return instance.post(`/upload/avatar`, data).then(res => res.data);
    },
};