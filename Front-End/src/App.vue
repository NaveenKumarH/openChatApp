<script setup>
import Opener from './components/Opener.vue'
</script>

<template>
  <Opener />
</template>

<style>
html,
body {
  margin: 0;
}

.div_main {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-left: 75px;
  padding-right: 75px;
}

.div_boxContent {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 50%;
  background-color: aliceblue;
  border-radius: 20px;
  margin-left: 10px;
  padding: 50px;
  margin-right: 10px;
  font-size: 5rem;
  justify-content: center;
  align-items: center;
}

.textContent {
  background-color: aliceblue;
}
input{
    margin: 10px;
    font-size: 2rem;
    border-radius: 5px;
}
@media screen and (max-width: 940px) {
  .div_boxContent {
    font-size: 3rem;
  }
  input{
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 640px) {
  .div_boxContent {
    font-size: 2rem;
  }
  input{
    font-size: 1rem;
  }
}

</style>