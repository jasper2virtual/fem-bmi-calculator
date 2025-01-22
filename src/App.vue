<template>
  <div class="flex flex-col h-screen">
    <hero />
    <your-self />
    <suggestions />
    <bmi-limitations />
  </div>
</template>
<script lang="ts" setup>
import hero from '/src/components/hero.vue'
import yourSelf from '/src/components/your-self.vue'
import suggestions from '/src/components/suggestions.vue'
import bmiLimitations from '/src/components/bmi-limitations.vue'
</script>