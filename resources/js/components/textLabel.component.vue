<template>
<label class="block mb-1 ml-1 text-gray-900 dark:text-gray-300" :class="{'text-sm': textsmall,'text-lg': textnormal,'text-xl': textlarge }">
    <slot></slot>
</label>
                        
</template>

<script>
export default {
    name: 'textLabel',
    props:{
        textsmall: Boolean,
        textnormal: Boolean,
        textlarge: Boolean
    }
}
</script>
