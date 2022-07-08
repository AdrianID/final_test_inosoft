import axios from 'axios';
const API_URL = 'http://localhost:8000/api/';

class InstructionService{
    getVendor(){
        return axios.get(API_URL + 'getVendor');
    }
    getInvoiceTo(){
        return axios.get(API_URL + 'getInvoiceTo');
    }
    getCustomer(){
        return axios.get(API_URL + 'getCustomer');
    }
    getUOM(){
        return axios.get(API_URL + 'getUOM');
    }
    getCurrency(){
        return axios.get(API_URL + 'getCurrency');
    }
    getChargeTo(){
        return axios.get(API_URL + 'getChargeTo');
    }
}
export default new InstructionService();