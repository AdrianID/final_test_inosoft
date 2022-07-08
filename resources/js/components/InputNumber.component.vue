<template>
        <div>
            <input  
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                :placeholder="placeholder">            
        </div>
</template>

<script>
export default {
    props:{
        value: String,
        placeholder: String,
        isPercent: Boolean
    },
    name: 'InputNumber',
}
</script>

<style>

</style>