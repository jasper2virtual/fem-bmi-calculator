<template>
    <div class="bg-white">
        <div>Enter your details below</div>
        <label><input type="radio" value="metric" v-model="systemChecked" />Metric</label>
        <label><input type="radio" value="imperial" v-model="systemChecked" />Imperial</label>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const systemChecked = ref('metric')
</script>