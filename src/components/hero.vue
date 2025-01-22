<template>
    <div class="mt-[--mobile-header-height] app-tablet:mt-[--tablet-header-height] app-desktop:mt-[--desktop-header-height]
        h-1/2 px-6
        relative
        flex flex-col gap-8
        ">
        <div class="gradient-1 absolute inset-x-0 top-0 rounded-br-3xl -z-10"></div>
        <div class="flex flex-col gap-6 items-center">
            <h1 class="text-center app-text-heading-l text-app-gunmetal">
                Body Mass
                Index Calculator
            </h1>
            <p class="text-center app-text-body-m text-app-darkElectricBlue">Better understand your weight in relation
                to your height using our
                body mass index (BM) calculator. While
                BMI
                is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your
                overall health and well-being.</p>
        </div>
        <bmi-calculator />
    </div>
</template>
<script lang="ts" setup>
import bmiCalculator from '/src/components/bmi-calculator.vue';
</script>

<style lang="scss" scoped>
.gradient-1 {
    background: linear-gradient(135deg, #D6FCFE00 0%, #D6E6FEFF 100%);
    @apply h-[calc(50%+var(--mobile-header-height))] app-tablet:h-[calc(75%+var(--tablet-header-height))] app-desktop:h-[calc(50%+var(--desktop-header-height))];
    @apply -translate-y-[--mobile-header-height] app-tablet:-translate-y-[--tablet-header-height] app-desktop:-translate-y-[--desktop-header-height];
}
</style>