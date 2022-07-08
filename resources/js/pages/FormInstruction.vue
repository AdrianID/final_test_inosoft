<template>
    <div class="mx-auto bg-white p-14">

    <div class="grid gap-2 grid-cols-7">
        <div>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
            </select>
        </div>
        <div class="grid gap-2 grid-cols-6 col-span-6">
            <div class="col-span-6">
                <span
                    class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                    Draft
                </span>
            
            </div>
            <div class="grid gap-2 grid-cols-5 col-span-6">
                <div class="grid gap-x-2 gap-y-5 pr-2 grid-cols-5 col-span-4" style="border-right: 1px dashed #bdbdbd">
                    <div class="col-span-2">
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Assigned Vendor</label>
                        <SelectOption v-model="data.vendor.assigned_vendor" :data="dataVendor" placeholder="Select Vendor"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Attention Of</label>
                        <InputText small v-model="data.vendor.attention_of" placeholder="Enter Attention Of"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Quotation No.</label>
                        <InputText small v-model="data.vendor.quotation_no" placeholder="Enter Quotation No."/></div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Invoice To</label>
                        <SelectOption small v-model="data.vendor.invoice_to" :data="dataInvoice" placeholder="Select Invoice To."/>
                    </div>
                    <div class="col-span-5">
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Vendor Address</label>
                        <InputText fullwidth v-model="data.vendor.vendor_address" placeholder="Enter Vendor Address"/>
                    </div>
                </div>
                <div class="grid  gap-x-2 gap-y-5 grid-cols-1">
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Customer - Contract</label>
                        <SelectOption large v-model="data.vendor.customer_contract" :data="dataCustomer" placeholder="Select Customer"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Customer PO No.</label>   
                        <SelectOption large v-model="data.vendor.customer_po_no" :data="DataCustomerPO" placeholder="Select Customer PO No."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <h1> Cost Detail</h1>
    <div class="mx-auto mt-5">
        <div class="relative overflow-x-auto  sm:rounded-lg">
            <table class="w-full text-xxs text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xxs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <template v-for="header in HeaderTable" >
                            <th scope="col" class="px-6 whitespace-nowrap py-3" :key="header">
                                {{header}}
                            </th>
                        </template>
                        <th scope="col" class="px-6 py-3">
                                
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(cost_detail,index) in data.cost_details" :key="index">
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputText extrasmall v-model="cost_detail.description" placeholder="Enter Description"/>
                            </td>    
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber small v-model="cost_detail.quantity" placeholder="Enter Attention Of"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <SelectOption extrasmall v-model="cost_detail.uom" :data="dataUOM"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber extrasmall v-model="cost_detail.unit_price"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber small persen v-model="cost_detail.discount"/>
                            
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber small v-model="cost_detail.vat"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <SelectOption extrasmall v-model="cost_detail.currency" :data="dataCurrency"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                {{VATAmount(Subtotal(cost_detail.quantity,cost_detail.unit_price,cost_detail.discount), cost_detail.vat)}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                {{Subtotal(cost_detail.quantity,cost_detail.unit_price,cost_detail.discount)}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                {{Total(Subtotal(cost_detail.quantity,cost_detail.unit_price,cost_detail.discount),VATAmount(Subtotal(cost_detail.quantity,cost_detail.unit_price,cost_detail.discount), cost_detail.vat))}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <SelectOption fullwidth v-model="cost_detail.charge_to" :data="dataChargeTo" placeholder="Select Vendor"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <Button small filled @button-click="remove(index)"><font-awesome-icon icon="fa-solid fa-minus"/> </Button>
                            </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" colspan="6" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Exchange Rate 1 USD = 3.6725 AED
                        </th>
                        <td class="px-6 py-4" >
                            AED in Total
                        </td>
                        <td class="px-6 py-4" >
                            0.00
                        </td>
                        <td class="px-6 py-4">
                            0.00
                        </td>
                        <td class="px-6 py-4">
                            0.00
                        </td>
                        <td class="px-6 py-4">
                            
                        </td>
                        <td class="px-6 py-4">
                            <Button primary small @button-click="addRow()"><font-awesome-icon icon="fa-solid fa-plus"/></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto mt-8">
            <div class="text-right">
                <Button text large>Cancel</Button>
                <Button outlined large> Save As Draft </Button>
                <Button primary large>Submit</Button>
            </div>
        </div>
    </div>
    </div>
    
</template>
<script>
import InputText from '../components/InputText.component.vue'
import InputNumber from '../components/InputNumber.component.vue'
import SelectOption from '../components/SelectOption.component.vue'
import Button from '../components/Button.component.vue'
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'form-instruction',
    components: {
        InputText,
        InputNumber,
        SelectOption,
        Button
    },
    data(){
        return{
            HeaderTable: ["Description","Qty","UOM","Unit Price","Discount(%)","VAT(%)","Currency","VAT Amount","Sub Total", "Total","Charge To"],
            DataCustomerPO: [],
            data: {
                vendor: {
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
    watch:{
        'data.vendor.customer_contract'(newVal){
            this.DataCustomerPO = this.dataCustomerPO(newVal);
        }
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
        remove: function (index) {
            this.data.cost_details.splice(index, 1);
        },
        addRow: function(){
            this.data.cost_details.push({
                    description: "",
                    quantity: "0",
                    uom: "",
                    unit_price: "0",
                    discount: "0",
                    vat: "0",
                    currency: "",
                    charge_to: ""
                })
        },
        Subtotal: function(qty,unit_price,discount){
            return ((qty * unit_price) - (qty * unit_price * (discount/100)));
        },
        VATAmount: function(sub_total,vat){
            return (sub_total  * (vat/100))
        },
        Total: function(sub_total,vat_amount){
            return (sub_total + vat_amount)
        }
    }
}
</script>

<style scoped>
.text-xxs{
    font-size: 0.65rem;
    line-height: 0.85rem;
}
</style>