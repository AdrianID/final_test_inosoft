<template>
    <div>
        <PopValidate :error="error" :isError="isError"/>
        <select v-bind:value="value"
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
                        w-full 
                        p-2 
                        dark:bg-gray-700 
                        dark:border-gray-600 
                        dark:placeholder-gray-400 
                        dark:text-white 
                        dark:focus:ring-blue-500 
                        dark:focus:border-blue-500"
                    :class="{'w-40': small,'w-16': extrasmall, 'w-full': fullwidth, 'w-48': large}"
                    >
                <option value="" disabled selected hidden>{{placeholder}}</option>
                <option v-for="item in data" :value="item.name" :key="item.id">{{item.name}}</option>
        </select>
    </div>
</template>

<script>
import PopValidate from './PopValidate.component.vue'
export default {
 name: 'SelectOption',
 props: {
    value: String,
    data: Array,
    placeholder: String,
    small: Boolean,
    extrasmall:Boolean,
    large: Boolean,
    fullwidth: Boolean
 },
 components:{
    PopValidate
 },
 data(){
    return{
        isError: false,
        error: ''
    }
 },
 watch:{
    value(newValue){
        if(newValue.length == 0 || newValue == ""){
            this.error = 'This Option Must Be Selected!'
            this.isError = true
        }else{
            this.error = false
        }
    }
 }
}
</script>

<style>

</style>