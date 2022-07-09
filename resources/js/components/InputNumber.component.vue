<template>
        <div>
            <PopValidate :isError="isError" :error="error"/>
            <input  
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
                class=" bg-gray-50 
                        border 
                        border-gray-300 
                        text-gray-900 
                        text-xs
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        block
                        p-2.5 
                        dark:bg-gray-700 
                        dark:border-gray-600 
                        dark:placeholder-gray-400 
                        dark:text-white 
                        dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" 
                :placeholder="placeholder"
                :class="{'w-16': small,'w-14': extrasmall, 'w-full': fullwidth}">            
        </div>
</template>

<script>
import PopValidate from './PopValidate.component.vue'
export default {
    components:{
        PopValidate
    },
    props:{
        value: String,
        placeholder: String,
        isPercent: Boolean,
        small: Boolean,
        extrasmall:Boolean,
        fullwidth: Boolean
    },
    name: 'InputNumber',
    data(){
        return{
            isError: false,
            error: ''
        }
    },
    watch: {
        value(newValue){
            if(newValue < 0 ){
                this.error = 'Value must be greater than 0!',
                this.isError = true
            }else if(newValue.length == 0){
                this.error = 'Field is required!',
                this.isError = true
            }else if(this.isPercent){
                if(newValue > 100){
                    this.error = 'Value can not be more than 100!',
                    this.isError = true
                }else{
                    this.isError = false
                }
            }else if(!parseInt(newValue) && newValue != 0){
                this.error = 'Value must be Number!',
                this.isError = true
            }else{
                this.isError = false
            }
        }
    }
}
</script>

<style>

</style>