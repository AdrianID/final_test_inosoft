import instructionService from "../../services/instruction.service";
const state = {
    dataVendor: [],
    dataCustomer: [],
    dataInvoice: [],
    dataUOM: [],
    dataCurrency: [],
    dataChargeTo: []
};

const mutations = {
    ADD_DATA_VENDOR(state,payload){
        state.dataVendor = payload
    },
    ADD_DATA_INVOICE(state,payload){
        state.dataInvoice = payload
    },
    ADD_DATA_CUSTOMER(state,payload){
        state.dataCustomer = payload
    },
    ADD_DATA_UOM(state,payload){
        state.dataUOM = payload
    },
    ADD_DATA_CURRENCY(state,payload){
        state.dataCurrency = payload
    },
    ADD_DATA_CHARGE_TO(state,payload){
        state.dataChargeTo = payload
    }
};

const actions = {
    AddDataVendor({commit}){
        instructionService.getVendor().then(
            response =>{
                commit('ADD_DATA_VENDOR', response.data)
            }
        )
    },
    AddDataInvoice({commit}){
        instructionService.getInvoiceTo().then(
            response =>{
                commit('ADD_DATA_INVOICE', response.data)
            }
        )
    },
    AddDataCustomer({commit}){
        instructionService.getCustomer().then(
            response =>{
                commit('ADD_DATA_CUSTOMER', response.data)
            }
        )
    },
    AddDataUOM({commit}){
        instructionService.getUOM().then(
            response =>{
                commit('ADD_DATA_UOM', response.data)
            }
        )
    },
    AddDataCurrency({commit}){
        instructionService.getCurrency().then(
            response =>{
                commit('ADD_DATA_CURRENCY', response.data)
            }
        )
    },
    AddDataChargeTo({commit}){
        instructionService.getChargeTo().then(
            response =>{
                commit('ADD_DATA_CHARGE_TO', response.data)
            }
        )
    },
};

const getters = {
    dataUOM:  state => state.dataUOM,
    dataCurrency:  state => state.dataCurrency,
    dataChargeTo:  state => state.dataChargeTo,
    dataVendor:  state => state.dataVendor,
    dataInvoice:  state => state.dataInvoice,
    dataCustomer:  state => state.dataCustomer,
    dataCustomerPO: (state) => (data) => {
        let findCustomer = state.dataCustomer.find(o => o.name === data)
        return findCustomer.customer_po_no;
    }
}

export const instruction = {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
};