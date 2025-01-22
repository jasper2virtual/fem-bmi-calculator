<template>
    <div class="bg-white">
        <div>Enter your details below</div>
        <div class="flex ">
            <label class=" flex-1"><input type="radio" value="metric" v-model="system" />Metric</label>
            <label class="flex-1"><input type="radio" value="imperial" v-model="system" />Imperial</label>
        </div>
        <div class="flex flex-col">
            <label class="flex flex-col">
                <span>Height:</span>
                <div v-if="system === 'metric'">
                    <input-number v-model="heightInCm" :max="300" unit="cm" />
                </div>
                <div v-else class="grid grid-cols-2 gap-4">
                    <div>
                        <input-number v-model="heightIn_FtPart" :max="10" unit="ft" />
                    </div>
                    <div>
                        <input-number v-model="heightIn_InPart" :max="11" unit="in" />
                    </div>
                </div>
            </label>
            <label class="flex flex-col">
                <span>Weight:</span>
                <div v-if="system === 'metric'">
                    <inputNumber v-model="weightInKg" unit="kg" :max="640" />
                </div>
                <div v-else class="grid grid-cols-2 gap-4">
                    <div>
                        <inputNumber v-model="weightIn_StPart" :max="100" unit="st" />
                    </div>
                    <div>
                        <inputNumber v-model="weightIn_LbPart" :max="13" unit="lb" />
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div>Your BMI is...</div>
<div>22.0</div>
Your BMI suggests you’re a healthy weight. Your ideal weight is between 9st 6lbs - 12st 10lbs.
        </div>
    </div>

</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useBMI } from '/src/libs/bmi'
import inputNumber from './input-number.vue'
const {
    system,
    weightInKg,
    heightInCm,
    weightInLb,
    heightInIn,
    bmi,
    idealWeightInKg,
    idealWeightInLb
} = useBMI()

const heightIn_FtPart = computed({
    get: () => Math.floor(heightInIn.value / 12),
    set: (val: number) => {
        heightInIn.value = val * 12 + heightIn_InPart.value
    }
})
const heightIn_InPart = computed({
    get: () => heightInIn.value % 12,
    set: (val: number) => {
        heightInIn.value = val + heightIn_FtPart.value * 12
    }
})
const weightIn_StPart = computed({
    get: () => Math.floor(weightInLb.value / 14),
    set: (val: number) => {
        weightInLb.value = val * 14 + weightIn_LbPart.value
    }
})
const weightIn_LbPart = computed({
    get: () => weightInLb.value % 14,
    set: (val: number) => {
        weightInLb.value = val + weightIn_StPart.value * 14
    }
})

</script>
