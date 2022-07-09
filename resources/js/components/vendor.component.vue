<template>
    <div class="grid gap-2 grid-cols-7">
        <div>
            <SelectOption v-model="data.instruction_type" :data="dataInstructionType" placeholder="Select.."/>        
        </div>
        <div class="grid gap-2 grid-cols-6 col-span-6">
            <div class="col-span-6">
                <Chip large>Draft</Chip>
            </div>
            <div class="grid gap-2 grid-cols-5 col-span-6">
                <div class="grid gap-x-2 gap-y-5 pr-2 grid-cols-5 col-span-4" style="border-right: 1px dashed #bdbdbd">
                    <div class="col-span-2">
                        <textLabel small>Assigned Vendor</textLabel>
                        <SelectOption v-model="data.assigned_vendor" :data="dataVendor" placeholder="Select Vendor"/>
                    </div>
                    <div>
                        <textLabel small>Attention Of</textLabel>
                        <InputText small v-model="data.attention_of" placeholder="Enter Attention Of"/>
                    </div>
                    <div>
                        <textLabel small>Quotation No.</textLabel>
                        <InputText small v-model="data.quotation_no" placeholder="Enter Quotation No."/></div>
                    <div>
                        <textLabel small>Invoice To</textLabel>
                        <SelectOption small v-model="data.invoice_to" :data="dataInvoice" placeholder="Select Invoice To."/>
                    </div>
                    <div class="col-span-5">
                        <textLabel small>Vendor Address</textLabel>
                        <InputText fullwidth v-model="data.vendor_address" placeholder="Enter Vendor Address"/>
                    </div>
                </div>
                <div class="grid  gap-x-2 gap-y-5 grid-cols-1">
                    <div>
                        <textLabel small>Customer - Contract</textLabel>
                        <SelectOption large v-model="data.customer_contract" :data="dataCustomer" placeholder="Select Customer"/>
                    </div>
                    <div>
                        <textLabel small>Customer PO No.</textLabel>   
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
import Chip from './Chip.component.vue'
import textLabel from './textLabel.component.vue'
export default {
    name: 'Vendor',
    props: ["datas", "dataVendor", "dataInvoice", "dataCustomer","dataCustomerPO"],
    components:{
        InputText,
        SelectOption,
        Chip,
        textLabel
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