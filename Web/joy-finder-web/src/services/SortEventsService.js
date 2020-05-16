import axios from 'axios';
import * as Const from '../static/const';

class SortEventService {
    async getAllEventsInCity(city){
        return axios.get(`${Const.API_URL}api/events/sorted/byCity/${city}/ThisYear`).then(
            (res) => {        
                return res.data;
            }
        ).catch((error) => {
            console.log(error);
            return null;
        });
    }
}

export default new SortEventService();