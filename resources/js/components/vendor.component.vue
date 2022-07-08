<template>
    <div class="grid gap-2 grid-cols-7">
        <div>
            <SelectOption v-model="data.instruction_type" :data="dataInstructionType" placeholder="Select.."/>        
        </div>
        <div class="grid gap-2 grid-cols-6 col-span-6">
            <div class="col-span-6">
                <span
                    class="px-16 py-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max">
                    Draft
                </span>
            
            </div>
            <div class="grid gap-2 grid-cols-5 col-span-6">
                <div class="grid gap-x-2 gap-y-5 pr-2 grid-cols-5 col-span-4" style="border-right: 1px dashed #bdbdbd">
                    <div class="col-span-2">
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Assigned Vendor</label>
                        <SelectOption v-model="data.assigned_vendor" :data="dataVendor" placeholder="Select Vendor"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Attention Of</label>
                        <InputText small v-model="data.attention_of" placeholder="Enter Attention Of"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Quotation No.</label>
                        <InputText small v-model="data.quotation_no" placeholder="Enter Quotation No."/></div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Invoice To</label>
                        <SelectOption small v-model="data.invoice_to" :data="dataInvoice" placeholder="Select Invoice To."/>
                    </div>
                    <div class="col-span-5">
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Vendor Address</label>
                        <InputText fullwidth v-model="data.vendor_address" placeholder="Enter Vendor Address"/>
                    </div>
                </div>
                <div class="grid  gap-x-2 gap-y-5 grid-cols-1">
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Customer - Contract</label>
                        <SelectOption large v-model="data.customer_contract" :data="dataCustomer" placeholder="Select Customer"/>
                    </div>
                    <div>
                        <label for="first_name" class="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Customer PO No.</label>   
                        <SelectOption large v-model="data.customer_po_no" :data="DataCustomerPO" placeholder="Select Customer PO No."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import InputText from '../components/InputText.component.vue'
import SelectOption from '../components/SelectOption.component.vue'
export default {
    name: 'Vendor',
    props: ["datas", "dataVendor", "dataInvoice", "dataCustomer","dataCustomerPO"],
    components:{
        InputText,
        SelectOption,
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
    data(){
        return{
            DataCustomerPO: [],
            dataInstructionType: [{"id": 1,"name": "Logistic Instruction"},{"id": 2,"name": "Service Instruction"}],
        }
    },
    watch:{
        'data.customer_contract'(newVal){
            this.DataCustomerPO = this.dataCustomerPO(newVal);
        }
    }
}
</script>

<style>

</style>