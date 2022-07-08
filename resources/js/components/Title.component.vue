<template>
  <h1 class="text-lg" :style="{color: TextColor}">
    <slot></slot>
  </h1>
</template>

<script>
export default {
    name: 'Title',
    props:{
        TextColor: {
            type: String,
            default: 'black'
        }
    }
}
</script>

<style>

</style>