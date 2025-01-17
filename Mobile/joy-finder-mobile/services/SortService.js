import axios from "axios";
import * as Const from "./Const";

class SortService {
  async getAllEventsInCity(city) {
    return axios
      .get(`${Const.API_URL}api/events/sorted/byCity/${city}/ThisYear`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return null;
      });
  }

  async searchByCity(city, option) {
    return axios
      .get(`${Const.API_URL}api/events/sorted/byCity/${city}/${option}`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return null;
      });
  }

  async searchByType(type, option) {
    return axios
      .get(`${Const.API_URL}api/events/sorted/byType/${type}/${option}`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return null;
      });
  }

  async searchAll() {
    return axios
      .get(`${Const.API_URL}api/events/`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return null;
      });
  }
}

export default new SortService();
