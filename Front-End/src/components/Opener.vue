<script setup>
import { ref } from 'vue';
let userName=ref("")
</script>

<template>
    <div class="div_main">
        <div class="div_boxContent">
            <div class="textContent">Username please!!</div>
            <input type="text" v-model="userName"/>
            <button>GO!!</button>
        </div>
    </div>
</template>

<style scoped></style>