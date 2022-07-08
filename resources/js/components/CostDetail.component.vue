<template>
    <div class="mx-auto mt-5">
        <Title TextColor="#00bfbf" class="mb-3"> Cost Detail</Title>
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
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(cost_detail,index) in data" :key="index">
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
                        <th scope="row" colspan="6" rowspan="2" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
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
                        
                        <td class="px-6 py-4 text-right" rowspan="2" colspan="2">
                            <Button primary small @button-click="addRow()"><font-awesome-icon icon="fa-solid fa-plus"/></Button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4" >
                            USD in Total
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import InputText from '../components/InputText.component.vue'
import InputNumber from '../components/InputNumber.component.vue'
import SelectOption from '../components/SelectOption.component.vue'
import Title from '../components/Title.component.vue'
import Button from '../components/Button.component.vue'
export default {
    name: 'CostDetail',
    props: ["datas","HeaderTable","dataUOM","dataCurrency","dataChargeTo"],
    components: {
        InputText,
        InputNumber,
        SelectOption,
        Title,
        Button
    },
    computed:{
        data:{
            get(){
                return this.datas;
            },
            set(value){
                this.$emit('update:datas', value)
            }
        }
    },
    methods:{
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

<style>

</style>