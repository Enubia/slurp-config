<template>
    <button
        class="greeting"
        type="button"
        @click="log"
    >
        {{ message }}
    </button>
</template>

<script setup lang="ts">
const message = 'Hello!';

function log() {
    console.log(message);
}
</script>

<style scoped>
.greeting {
    color: red;
    font-weight: bold;
}
</style>
