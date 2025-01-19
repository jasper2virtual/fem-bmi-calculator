<template>
    <div class="bg-white">
        <div>Enter your details below</div>
        <div class="flex ">
            <label class=" flex-1"><input type="radio" value="metric" v-model="system" />Metric</label>
            <label class="flex-1"><input type="radio" value="imperial" v-model="system" />Imperial</label>
        </div>
        <div class="flex flex-col">
            <label class="flex flex-col"><span>Height:</span>
                <div><input type="number" v-model="heightInMetric.cm" /><div></div></div>
            </label>
            <label class="flex flex-col"><span>Weight:</span>
                <div><input type="number" v-model="weightInMetric.kg" /><div></div></div>
            </label>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { useBMI } from '/src/libs/bmi'
const { weightInKg,
        heightInM,
        weightInLb,
        heightInFt,
        bmi,
        idealWeightInKg,
        idealWeightInLb } = useBMI()

</script>