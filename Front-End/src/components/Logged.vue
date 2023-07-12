<script setup>
const props = defineProps({ user: String })
</script>
<template>
    <div class="div_main">
        <div class="div_boxContent">
            <h5>Hola!! {{ props.user }}</h5>
        </div>

    </div>
</template>
<style scoped>

</style>