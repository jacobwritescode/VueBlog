import { api , catchHandler } from "../../../helpers/axios"
import config from "../../../config";

export function fetchBlogs() {
    return api()
        .get(config.routes.blogs)
        .catch(catchHandler);
}