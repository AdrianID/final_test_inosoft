<template>
    <div class="relative" v-if="isError">
        <div class="absolute top-0 p-2 -mt-1 text-sm leading-tight text-white transform -translate-y-full bg-orange-500 rounded-lg shadow-lg">
            {{error}}
        </div>
        <svg class="absolute z-10 w-6 h-6 text-orange-500 transform  -translate-y-3 fill-current stroke-current" width="8" height="8">
            <rect x="12" y="-10" width="8" height="8" transform="rotate(45)" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'PopValidate',
    props: ["isError", "error"]
}
</script>

<style>

</style>