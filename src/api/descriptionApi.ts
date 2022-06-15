import { instance } from "./axios.config";

export const descriptionApi = {
    getDescription(id:number) {
        return instance.get(`/description/${id}`).then(res => res.data);
    },
    updataDescription(data:any) {
        console.log(data)
        return instance.put(`/description`, data).then(res => res.data);
    }
};