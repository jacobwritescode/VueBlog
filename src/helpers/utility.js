import Cookies from "js-cookie";
import config from "../config";

const cookies = config.cookies;

export function clearCookies() {
    Cookies.remove(cookies.name, {
        domain: cookies.domain
    });
}
export function setCookies(data) {
    try {

        let cookie = {}
        if (data.user && data.user.token)
            cookie.authKey = data.user.token
        if (data.user && data.user.email)
            cookie.email = data.user.email
        else
            cookie.email = "";
        if (data.user && data.user.name)
            cookie.name = data.user.name;
    
        Cookies.set(cookies.name, cookie, {
            expires: cookies.expiry,
            domain: cookies.domain
        });
    } catch (e) {
        console.log(e)
    }
}
export function updateCookies(data) {
    let currentToken = Cookies.getJSON(cookies.name);
    if (data && data.firstName) {
        currentToken.firstName = data.firstName;
    }if (data && data.lastName) {
        currentToken.lastName = data.lastName;
    }
}
export function getCookies() {
    return Cookies.get(cookies.name)
}
export function getJsonCookies() {
    let token = Cookies.getJSON(cookies.name);
    if (token)
        return token.authKey
}
export function getCookie() {
    let token = Cookies.getJSON(cookies.name);
    if (token)
        return token
}

