<template>
    <div class="mx-auto bg-white p-14">
        <div class="mb-5">
            <Title>3rd Party Instruction</Title>
        </div>
        <div>
            <Vendor @update:datas="newValue => data.vendor = newValue" :datas="data.vendor" :dataVendor="dataVendor" :dataInvoice="dataInvoice" :dataCustomer="dataCustomer" :dataCustomerPO="dataCustomerPO" />
        </div>
        <div>
            <CostDetail @update:datas="newValue => data.cost_details = newValue" :datas="data.cost_details" :dataUOM="dataUOM" :dataCurrency="dataCurrency" :dataChargeTo="dataChargeTo" :HeaderTable="HeaderTable"/>
        </div>
        <div class="mx-auto mt-8">
            <div class="text-right">
                <Button text large>Cancel</Button>
                <Button outlined large> Save As Draft </Button>
                <Button primary large>Submit</Button>
            </div>
        </div>
    </div>
    
</template>
<script>
import Button from '../components/Button.component.vue'
import CostDetail from '../components/CostDetail.component.vue'
import Vendor from '../components/vendor.component.vue'
import Title from '../components/Title.component.vue'
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'form-instruction',
    components: {
        Button,
        CostDetail,
        Vendor,
        Title
    },
    data(){
        return{
            HeaderTable: ["Description","Qty","UOM","Unit Price","Discount(%)","VAT(%)","Currency","VAT Amount","Sub Total", "Total","Charge To"],
            data: {
                vendor: {
                    instruction_type: "Logistic Instruction",
                    assigned_vendor: "",
                    attention_of: "",
                    quotation_no: "",
                    invoice_to: "",
                    vendor_address: "",
                    customer_contract: "",
                    customer_po_no: ""
                },
                cost_details:[
                    {
                        description: "",
                        quantity: "0",
                        uom: "",
                        unit_price: "0",
                        discount: "0",
                        vat: "0",
                        currency: "",
                        charge_to: ""
                    }
                ]
            }
        }
    },
    computed:{
        ...mapGetters('instruction', ['dataCustomerPO','dataCustomer','dataUOM','dataCurrency','dataChargeTo','dataVendor','dataInvoice']),
    },
    created(){
        this.AddDataVendor();
        this.AddDataInvoice();
        this.AddDataCustomer();
        this.AddDataUOM();
        this.AddDataCurrency();
        this.AddDataChargeTo();
    },
    methods:{
        ...mapActions('instruction',['AddDataVendor','AddDataInvoice','AddDataCustomer','AddDataUOM','AddDataCurrency','AddDataChargeTo']),
    }
}
</script>

<style scoped>
.text-xxs{
    font-size: 0.65rem;
    line-height: 0.85rem;
}
</style>