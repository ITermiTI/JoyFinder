import axios from 'axios';
import * as Const from '../static/const';
import SortEventService from './SortEventsService'

export const logged_username = 'loggedUser';
export const logged_userid = 'loggedID';

class AuthorizationService{
    
    executeLogin(login, password){
        /*return axios.post(`http://localhost:8080/login`,
        
        )*/
        return axios.get(`${Const.API_URL}api/authenticate`,
            { headers: { authorization: this.createBasicAuthToken(login, password) }      
            } )
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    async registerSuccessfulLogin(login,password) {        
        sessionStorage.setItem(logged_username, login)        
        this.setupAxiosInterceptors(this.createBasicAuthToken(login,password))
        await axios.get(`${Const.API_URL}api/session`).then(
            async (res) => {
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
        sessionStorage.removeItem(logged_userid);
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

    getLoggedInUserId() {
        let id = sessionStorage.getItem(logged_userid);
        if(id === null) return '';
        return id;
    }
}

export default new AuthorizationService();