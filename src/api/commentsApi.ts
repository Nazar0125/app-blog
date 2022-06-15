import { instance } from "./axios.config";

export const commentsApi = {
    addComment(data:any) {
        return instance.post(`/comments/`, data).then(res => res.data);
    },
    updateComment(data:any) {
        return instance.put(`/comments/`, data).then(res => res.data);
    },
    deleteComment(id:any) {
        console.log('deleteComment', id)
        return instance.delete(`/comments/${id}`).then(res => res.data);
    }
};