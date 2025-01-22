<template>
    <div class="bg-white rounded-3xl flex flex-col gap-4 p-4">
        <div class="app-text-heading-m" >Enter your details below</div>
        <div class="flex app-text-body-m">
            <label class=" flex-1 flex gap-2"><input type="radio" value="metric" v-model="system" />Metric</label>
            <label class="flex-1 flex gap-2"><input type="radio" value="imperial" v-model="system" />Imperial</label>
        </div>
        <div class="flex flex-col gap-4" :class="{
             'app-tablet:flex-row': system === 'metric',
        }">
            <label class="flex flex-col gap-2 app-tablet:flex-1">
                <span>Height:</span>
                <div v-if="system === 'metric'">
                    <input-number v-model="heightInCm" :max="300" unit="cm" />
                </div>
                <div v-else class="flex gap-4">
                    <div class="flex-1">
                        <input-number v-model="heightIn_FtPart" :max="10" unit="ft" />
                    </div>
                    <div class="flex-1">
                        <input-number v-model="heightIn_InPart" :max="11" unit="in" />
                    </div>
                </div>
            </label>
            <label class="flex flex-col gap-2 app-tablet:flex-1">
                <span>Weight:</span>
                <div v-if="system === 'metric'">
                    <inputNumber v-model="weightInKg" unit="kg" :max="640" />
                </div>
                <div v-else class="flex gap-4">
                    <div class="flex-1">
                        <inputNumber v-model="weightIn_StPart" :max="100" unit="st" />
                    </div>
                    <div class="flex-1">
                        <inputNumber v-model="weightIn_LbPart" :max="13" unit="lb" />
                    </div>
                </div>
            </label>
        </div>
        <div class=" bg-app-blue text-white rounded-lg p-4 app-text-body-m flex flex-col gap-4 app-tablet:rounded-r-full app-tablet:flex-row app-tablet:justify-between app-tablet:items-center " v-if="bmi.bmiValue">
            <div class="flex flex-col gap-2">
                <div>Your BMI is...</div>
                <div class="app-text-heading-l">{{ bmi.bmiValue.toFixed(1) }}</div>
            </div>
            <div>
                Your BMI suggests you’re a {{ bmi.bmiCategory }}. Your ideal weight is between
                <span class="font-bold">
                    <template v-if="system === 'metric'">
                        {{ idealWeightInKg.min.toFixed(1) }}kgs - {{ idealWeightInKg.max.toFixed(1) }}kgs
                    </template>
                    <template v-else>
                        {{ minIdealWeightIn_StPart.toFixed(0) }}st {{ minIdealWeightIn_LbPart.toFixed(0) }}lbs - {{
                            maxIdealWeightIn_StPart.toFixed(0) }}st {{
                            maxIdealWeightIn_LbPart.toFixed(0) }}lbs
                    </template>
                </span>
                .
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { computed } from 'vue'
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
const minIdealWeightIn_LbPart = computed(() => idealWeightInLb.value.min % 14)
const minIdealWeightIn_StPart = computed(() => Math.floor(idealWeightInLb.value.min / 14))
const maxIdealWeightIn_LbPart = computed(() => idealWeightInLb.value.max % 14)
const maxIdealWeightIn_StPart = computed(() => Math.floor(idealWeightInLb.value.max / 14))


</script>
