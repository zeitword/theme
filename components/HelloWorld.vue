<script setup lang="ts">
const { zeitLayer } = useAppConfig();
</script>

<template>
  <div class="bg-red-50">
    <h1>Hello Worldius !</h1>
    <pre>{{ zeitLayer }}</pre>
  </div>
</template>
