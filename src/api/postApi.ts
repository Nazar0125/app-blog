import { instance } from "./axios.config";

export const PostApi = {
    getlist() {
        return instance.get('/last').then(res => res.data);
    },
    addPost(data:any) {
        return instance.post(`/post`, data).then(res => res.data);
    },
    getByPost(id:string|undefined) {
        return instance.get(`/post/${id}`).then(res => res.data);
    },
    getLike(data: any) {
        return instance.get(`/post/like/`, data).then(res => res.data);
    },
    addLike(data:any) {
        return instance.post(`/post/like`, data).then(res => res.data);
    },
    deleteLike(id:any) {
        return instance.post(`/post/like/${id}`).then(res => res.data);
    },
};