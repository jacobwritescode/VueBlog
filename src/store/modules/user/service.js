import { api , catchHandler } from "../../../helpers/axios"
import config from "../../../config";

export function userLogin(data) {
    console.log("data to api-->",data)
    return api()
        .post(config.routes.login,data)
        .catch(catchHandler);
}
export function userSignup(data) {
    console.log("data to api-->",data)
    return api()
        .post(config.routes.signup,data)
        .catch(catchHandler);
}