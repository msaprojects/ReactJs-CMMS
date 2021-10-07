// ++ for get user from api response
const getUser = () => {
    const userStr = sessionStorage.getItem("username");
    if(userStr) return JSON.parse(userStr);
    else return null;
}
// ++ for get token from api response
const getToken = () => {
    return sessionStorage.getItem("access_token") || null;
}
// ++ set session storage from api response value for authentication
const setUserSession = (access_token, user) => {
    sessionStorage.setItem("access_token", access_token);
    sessionStorage.setItem("username", JSON.stringify(user));
}
// ++ authentication validation session storage
const removeUserSession = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("username");
}

export {
    getUser,
    getToken,
    setUserSession,
    removeUserSession
}

