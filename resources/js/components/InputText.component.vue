<template>
        <div>
            <PopValidate :error="error" :isError="isError"/>
            <input  
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)" 
                type="text" 
                class=" bg-gray-50 border 
                        border-gray-300 
                        text-gray-900 
                        text-xs 
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        block
                        p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 
                        dark:placeholder-gray-400 
                        dark:text-white 
                        dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" 
                :placeholder="placeholder"
                :class="{'w-40': small,'w-32': extrasmall, 'w-full': fullwidth}">            
        </div>
</template>

<script>
import PopValidate from './PopValidate.component.vue'
export default {
    name: 'InputText',
    props:{
        value: String,
        placeholder: String,
        small: Boolean,
        extrasmall:Boolean,
        fullwidth: Boolean
    },
    components:{
        PopValidate
    },
    data(){
        return{
            error: '',
            isError: false
        }
    },
    watch:{
        value(newValue){
            if(newValue.length == 0){
                this.error = 'Field is required!',
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