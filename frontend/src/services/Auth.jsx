const Auth = () => {

    const setToken = async (name, payload) => {
        return localStorage.setItem(name, payload);
    }

    const getToken = (name) => {
        return localStorage.getItem(name);
    }

    const removeToken = (name) => {
        return localStorage.removeItem(name);
    }

    return {
        setToken,
        getToken,
        removeToken
    }

}
export default Auth;