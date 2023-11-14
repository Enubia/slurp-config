<template>
    <button
        class="greeting"
        type="button"
        @click="log"
    >
        {{ msg }}
    </button>
</template>

<script setup>
const message = 'Hello!';

function log() {
    // eslint-disable-next-line no-console
    console.log(message);
}
</script>

<style scoped>
.greeting {
    color: red;
    font-weight: bold;
}
</style>
