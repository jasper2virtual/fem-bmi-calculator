<template>
    <div class="bg-white">
        <div>Enter your details below</div>
        <div class="flex ">
            <label class=" flex-1"><input type="radio" value="metric" v-model="system" />Metric</label>
            <label class="flex-1"><input type="radio" value="imperial" v-model="system" />Imperial</label>
        </div>
        <div class="flex flex-col">
            <label class="flex flex-col"><span>Height:</span>
                <div>
                    <input type="number" v-model="heightInCm" />
                </div>
                <div>
                    <input type="number" v-model="heightInFtPart" />
                    <input type="number" v-model="heightInInPart" min="0" max="11" />
                </div>
            </label>
            <label class="flex flex-col"><span>Weight:</span>
                <div><input type="number" v-model="weightInKg" />
                    <div></div>
                </div>
            </label>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useBMI } from '/src/libs/bmi'
const { weightInKg,
    heightInCm,
    weightInLb,
    heightInIn,
    bmi,
    idealWeightInKg,
    idealWeightInLb } = useBMI()
const system = ref<'imperial' | 'metric'>('metric')
const heightInInPart = computed({
    get: () => heightInIn.value % 12,
    set: (val: number) => {
        heightInIn.value = val + heightInFtPart.value * 12
    }
})
const heightInFtPart = computed({
    get: () => Math.floor(heightInIn.value / 12),
    set: (val: number) => {
        heightInIn.value = val * 12 + heightInInPart.value
    }
})
</script>