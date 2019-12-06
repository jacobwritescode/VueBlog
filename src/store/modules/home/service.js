import { api , catchHandler } from "../../../helpers/axios"
import config from "../../../config";
import { getCookie } from "../../../helpers/utility";

export function fetchBlogs() {
    return api()
        .get(config.routes.blogs)
        .catch(catchHandler);
}
export function createPost(data){
    if(data){
        data.authorname = getCookie().name
    }
    return api()
    .post(config.routes.create,data)
    .catch(catchHandler); 
}
export function getPost(data){
    return api()
        .get(`${config.routes.post}/${data}`)
        .catch(catchHandler);
}
export function updatePost(data){
    return api()
    .put(`${config.routes.post}/${data._id}`,data)
    .catch(catchHandler)
}
export function deletePost(data){
    return api()
    .delete(`${config.routes.post}/${data}`)
    .catch(catchHandler)
}