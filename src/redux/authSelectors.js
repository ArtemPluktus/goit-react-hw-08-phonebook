const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserToken = state => state.auth.token;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserToken,
    getIsRefreshingUser
}

export default authSelectors;