<script setup>
const props = defineProps({ user: String })
</script>
<template>
    <div class="div_main">
        <div class="div_boxContent">
            <div class="textContent">Hola!! {{ props.user }}</div>
            <input type="text" /> <button>Create</button>
            <input type="text" /> <button>Join</button>
        </div>

    </div>
</template>
<style scoped></style>