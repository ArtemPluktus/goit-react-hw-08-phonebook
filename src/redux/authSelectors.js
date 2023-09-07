const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserToken = state => state.auth.token;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserToken
}

export default authSelectors;