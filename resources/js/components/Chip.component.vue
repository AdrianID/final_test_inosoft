<template>
    <span
        class="py-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max" :class="{'px-16': large, 'px-10':small}" :style="{'background-color': bgColor}">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'Chip',
    props: {
        small: Boolean,
        large: Boolean,
        bgColor: String
    }
}
</script>
