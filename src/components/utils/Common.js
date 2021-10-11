// ++ for get user from api response
const getUsername = () => {
    const userStr = sessionStorage.getItem("username");
    if(userStr) return JSON.parse(userStr);
    else return null;
}
// ++ for get token from api response
const getToken = () => {
    return sessionStorage.getItem("access_token") || null;
}
const getJabatan = () => {
    const jabatanStr = sessionStorage.getItem("jabatan");
    if(jabatanStr) return JSON.parse(jabatanStr);
    else return null;
}
// ++ set session storage from api response value for authentication
const setUserSession = (access_token, user, jabatan) => {
    sessionStorage.setItem("access_token", access_token);
    sessionStorage.setItem("username", JSON.stringify(user));
    sessionStorage.setItem("jabatan", JSON.stringify(jabatan));
}
// ++ authentication validation session storage
const removeUserSession = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("jabatan");
}

export {
    getUsername,
    getToken,
    getJabatan,
    setUserSession,
    removeUserSession
}

