<template>
         <button type="button" 
                :class="{ 'bg-gray-200 text-gray-600': filled,'button-primary': primary, 'text-gray-900 bg-white': outlined || text , 'border border-gray-200': outlined, 'px-5': large, 'px-3':small}" 
                class="font-medium rounded-lg text-sm py-2.5 mr-1 mb-1"
                @click="$emit('button-click')">
            <slot></slot>
         </button>
</template>

<script>
export default {
    props:{
        primary: Boolean,
        outlined: Boolean,
        text: Boolean,
        small: Boolean,
        large: Boolean,
        filled: Boolean
    },
    name: 'Button'
}
</script>

<style scoped>
    .button-primary{
        background-color: #00bfbf;
        color: white;
    }
</style>