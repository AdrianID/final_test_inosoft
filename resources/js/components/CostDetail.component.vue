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
                                <InputNumber small isPercent v-model="cost_detail.discount"/>
                            
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <InputNumber small isPercent v-model="cost_detail.vat"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <SelectOption extrasmall v-model="cost_detail.currency" :data="dataCurrency"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                {{VATAmount(index)}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                {{SubTotal(index)}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                {{Total(index)}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <SelectOption fullwidth v-model="cost_detail.charge_to" :data="dataChargeTo" placeholder="Select"/>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                <Button small filled @button-click="remove(index)"><font-awesome-icon icon="fa-solid fa-minus"/> </Button>
                            </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" colspan="6" rowspan="2" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Exchange Rate 1 USD = 3.6725 AED
                        </th>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900" >
                            AED in Total
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900" >
                            {{VATAmountAED}}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                            {{SubTotalAED}}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                            {{totalAED}}
                        </td>
                        
                        <td class="px-6 py-4 text-right" rowspan="2" colspan="2">
                            <Button primary small @button-click="addRow()"><font-awesome-icon icon="fa-solid fa-plus"/></Button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900" >
                            USD in Total
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900" >
                            {{VATAmountUSD}}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                            {{SubTotalUSD}}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                            {{totalUSD}}
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
        },
        SubTotal(){
            return (index) => {
                let data = this.data[index];
                let total = ((data.quantity * data.unit_price) - (data.quantity * data.unit_price * (data.discount/100)))
                this.data[index].sub_total = total;
                return total
            }
        },
        VATAmount(){
            return (index) => {
                let data = this.data[index];
                let total = (data.sub_total  * (data.vat/100))
                this.data[index].vat_amount = total;
                return total
            }
        },
        Total(){
            return (index) => {
                let data = this.data[index];
                let total = (data.sub_total + data.vat_amount)
                this.data[index].total = total;
                return total
            }
        },
        TotalUSD(){
            let data = this.data.map(item => {
	            let temp = Object.assign({}, item);
                if(temp.currency == 'AED'){
                    temp.sub_total = this.convertUSD(temp.sub_total);
                    temp.vat_amount = this.convertUSD(temp.vat_amount)
                    temp.total = this.convertUSD(temp.total)
                }
	            return temp;
	        })
            return data;
        },
        TotalAED(){
            let data = this.data.map(item => {
	            let temp = Object.assign({}, item);
                if(temp.currency == 'USD'){
                    temp.sub_total = this.convertAED(temp.sub_total);
                    temp.vat_amount = this.convertAED(temp.vat_amount)
                    temp.total = this.convertAED(temp.total)
                }
	            return temp;
	        })
            return data;
        },
        SubTotalUSD(){
            return this.TotalUSD.reduce((n, {sub_total}) => n + sub_total, 0);
        },
        VATAmountUSD(){
            return this.TotalUSD.reduce((n, {vat_amount}) => n + vat_amount, 0);
        },
        totalUSD(){
            return this.TotalUSD.reduce((n, {total}) => n + total, 0);
        },
        
        SubTotalAED(){
            return this.TotalAED.reduce((n, {sub_total}) => n + sub_total, 0);
        },
        VATAmountAED(){
            return this.TotalAED.reduce((n, {vat_amount}) => n + vat_amount, 0);
        },
        totalAED(){
            return this.TotalAED.reduce((n, {total}) => n + total, 0);
        }
    },
    methods:{
        remove: function (index) {
            this.data.splice(index, 1);
        },
        addRow: function(){
            console.log(this.TotalPriceUSD);
            this.data.push({
                    description: "",
                    quantity: "0",
                    uom: "SHP",
                    unit_price: "0",
                    discount: "0",
                    vat: "0",
                    currency: "USD",
                    charge_to: "",
                    sub_total: "0",
                    vat_amount: "0",
                    total: "0"
                })
        },
        convertUSD: function(value){
            return value * 3.6725;
        },
        convertAED: function(value){
            return value * 0.27;
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