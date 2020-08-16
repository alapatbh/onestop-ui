
const appSettings = {
    getAuthCookieName: () => 'os_token',
    getCognitoUserPoolId: () => 'us-east-1_02n0gTlVt',
    getCognitoUserPoolClientId: () => '5j6outctjdnf0v3ojr599ahimo',
    getRequestedURLName: () => 'requestedURL'
}

export const setAuthToken = (sessionTokens) => {
    localStorage.setItem( appSettings.getAuthCookieName(), JSON.stringify(sessionTokens));
}

export const removeAuthTocken = () => {
    localStorage.removeItem( appSettings.getAuthCookieName());
}

export const getAuthToken = () => localStorage.getItem(appSettings.getAuthCookieName())

export default appSettings;