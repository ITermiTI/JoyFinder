import axios from "axios";
import { AsyncStorage } from "react-native";
import * as Const from "./Const";
import Base64 from "./Btoa";

class AuthService {
  executeLogin(login, password) {
    return axios.get(`${Const.API_URL}api/authenticate`, {
      headers: { authorization: this.createBasicAuthToken(login, password) },
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + Base64.btoa(username + ":" + password);
  }

  async registerSuccessfulLogin(login, password) {
    await AsyncStorage.setItem("logged_username", login);
    this.setupAxiosInterceptors(this.createBasicAuthToken(login, password));
    await axios
      .get(`${Const.API_URL}api/session`)
      .then(async (res) => {
        const userId = res.data.userId;
        await AsyncStorage.setItem("logged_userid", String(userId));
      })
      .catch((error) => console.log(error));
  }
  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }

  async logout() {
    await AsyncStorage.removeItem("logged_username");
    await AsyncStorage.removeItem("logged_userid");
  }

  async isUserLoggedIn() {
    let user = await AsyncStorage.getItem("logged_username");
    if (user === null) return false;
    return true;
  }

  async getUserData() {
    let userid = await AsyncStorage.getItem("logged_userid");
    if (userid === null) return null;
    return axios.get(`${Const.API_URL}api/user/${userid}`);
  }
}

export default new AuthService();
