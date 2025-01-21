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
                    <inputNumber v-model="heightInCm" unit="cm" />
                </div>
                <div v-else class="grid grid-cols-2 gap-4">
                    <div>
                        <inputNumber v-model="heightIn_FtPart" unit="ft" />
                    </div>
                    <div>
                        <inputNumber v-model="heightIn_InPart" :min="0" :max="11" unit="in" />
                    </div>
                </div>
            </label>
            <label class="flex flex-col">
                <span>Weight:</span>
                <div v-if="system === 'metric'"><input type="number" v-model="weightInKg" /> </div>
                <div v-else>
                    <input type="number" v-model="weightIn_StPart" class="flex-1" />
                    <input type="number" v-model="weightIn_LbPart" min="0" max="13" class="flex-1" />
                </div>
            </label>
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
