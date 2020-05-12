import axios from 'axios';

export const logged_username = 'loggedUser';
export const logged_userid = 'loggedID';

class AuthorizationService{
    
    executeLogin(login, password){
        /*return axios.post(`http://localhost:8080/login`,
        
        )*/
        return axios.get(`http://localhost:8080/api/authenticate`,
            { headers: { authorization: this.createBasicAuthToken(login, password) }      
            } )
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(login,password) {        
        sessionStorage.setItem(logged_username, login)        
        this.setupAxiosInterceptors(this.createBasicAuthToken(login,password))
        axios.get(`http://localhost:8080/api/session`).then(
            (res) => {
                console.log(res);
                const userId = res.data.userId;
                sessionStorage.setItem(logged_userid,userId);
            }
        ).catch((error) => console.log(error))
    }
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

    logout() {
        sessionStorage.removeItem(logged_username);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(logged_username)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(logged_username)
        if (user === null) return ''
        return user
    }
}

export default new AuthorizationService();