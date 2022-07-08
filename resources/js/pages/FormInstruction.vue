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
                        <SelectOption v-model="input" :data="select" placeholder="Select Vendor"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Attention Of</label>
                        <InputText v-model="input" placeholder="Enter Attention Of"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Quotation No.</label>
                        <InputText v-model="input" placeholder="Enter Attention Of"/></div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Invoice To</label>
                        <SelectOption v-model="input" :data="select" placeholder="Select Vendor"/>
                    </div>
                    <div class="col-span-5">
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Vendor Address</label>
                        <InputText v-model="input" placeholder="Enter Attention Of"/>
                    </div>
                </div>
                <div class="grid  gap-x-2 gap-y-5 grid-cols-1">
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Customer - Contract</label>
                        <SelectOption v-model="input" :data="select" placeholder="Select Vendor"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Customer PO No.</label>   
                        <SelectOption v-model="input" :data="select" placeholder="Select Vendor"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-5">
        <h1> Cost Detail</h1>
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
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(cost_detail,index) in cost_details" :key="index">
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputText v-model="cost_detail.description" placeholder="Enter Attention Of"/>
                            </td>    
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber v-model="cost_detail.quantity" placeholder="Enter Attention Of"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <SelectOption v-model="cost_detail.uom" :data="select" placeholder="Select Vendor"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber v-model="cost_detail.unit_price" placeholder="Enter Attention Of"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber persen v-model="cost_detail.discount" placeholder="Enter Attention Of"/>
                            
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber v-model="cost_detail.vat" placeholder="Enter Attention Of"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <SelectOption v-model="cost_detail.currency" :data="select" placeholder="Select Vendor"/>
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
                                <SelectOption v-model="cost_detail.charge_to" :data="select" placeholder="Select Vendor"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <button @click="remove(index)">Remove</button>
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
                            <button @click="addRow()">Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto mt-8">
            <div class="text-right">
                
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Save As Draft</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
                
            </div>
        </div>
    </div>
    </div>
    
</template>
<script>
import InputText from '../components/InputText.component.vue'
import InputNumber from '../components/InputNumber.component.vue'
import SelectOption from '../components/SelectOption.component.vue'
export default {
    name: 'form-instruction',
    components: {
        InputText,
        InputNumber,
        SelectOption
    },
    data(){
        return{
            input: '',
            select: [{
                id: '1',
                name: 'aku'
            },{
                id: '2',
                name: 'iya'
            }],
            HeaderTable: ["Description","Qty","UOM","Unit Price","Discount(%)","VAT(%)","Currency","VAT Amount","Sub Total", "Total","Charge To"],
            cost_details:[
                {
                    description: '',
                    quantity: "",
                    uom: '',
                    unit_price: "",
                    discount: "",
                    vat: "",
                    currency: '',
                    charge_to: ''
                }
            ]
        }
    },
    methods:{
        remove: function (index) {
            this.cost_details.splice(index, 1);
        },
        addRow: function(){
            this.cost_details.push({
                    description: '',
                    quantity: '',
                    uom: '',
                    unit_price: '',
                    discount: '0',
                    vat: '0',
                    currency: '',
                    charge_to: ''
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