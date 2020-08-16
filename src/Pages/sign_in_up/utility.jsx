import Settings, {setAuthToken} from '../../settings'
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export const login = (email, pwd) => {
    
    let poolData = {
        UserPoolId : Settings.getCognitoUserPoolId(),
        ClientId : Settings.getCognitoUserPoolClientId()
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var authenticationData =
    {
      'UserName': email,
      'Password': pwd
    }
    var userData = {
      Username : email,
      Pool : userPool
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: async (result) => {
        var sessionTokens =
        {
          IdToken: result.getIdToken(),
          AccessToken: result.getAccessToken(),
          RefreshToken: result.getRefreshToken()
        };
        
        setAuthToken(sessionTokens)
        localStorage.setItem('email', email);

        // cognitoUser.getUserAttributes(function(err, result) {
        //   if (err) {
        //       alert(err.message);
        //       return;
        //   }

        //   for (let i = 0; i < result.length; i++) {
        //       if (result[i].getName() === 'sub') {
        //         localStorage.setItem('userId', result[i].getValue());
        //       }
        //   }
        // });
        let url = sessionStorage.getItem(Settings.getRequestedURLName());
        window.location.href = url;
        sessionStorage.removeItem(Settings.getRequestedURLName());
        return true;
      },

      onFailure: function(err) {
        alert(err.message);
        return false;
      },

    });
}
