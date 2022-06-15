import { instance } from "./axios.config";

export const staticApi = {
    static(data:any) {
        return instance.post(`/${data}`).then(res => res.data);
    },
};