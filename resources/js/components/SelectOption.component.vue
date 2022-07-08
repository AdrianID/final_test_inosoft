<template>
    <div>
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
                        dark:focus:border-blue-500">
                <option value="" disabled selected hidden>{{placeholder}}</option>
                <option v-for="item in data" :value="item.name" :key="item.id">{{item.name}}</option>
        </select>
    </div>
</template>

<script>
export default {
 name: 'SelectOption',
 props: ["value","data","placeholder"],
 data(){
    return{

    }
 }
}
</script>

<style>

</style>