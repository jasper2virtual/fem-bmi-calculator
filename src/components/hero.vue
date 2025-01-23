<template>
        <div class="flex flex-col gap-8 px-6 app-desktop:px-0 app-desktop:app-grid-container app-desktop:items-center
        mt-[--mobile-header-height] app-tablet:mt-[--tablet-header-height] app-desktop:mt-[--desktop-header-height]
        ">
            <div class="flex flex-col gap-6 items-center app-desktop:col-span-5 text-center app-desktop:text-start">
                <h1 class=" app-text-heading-l app-desktop:app-text-heading-xl text-app-gunmetal">
                    Body Mass
                    Index Calculator
                </h1>
                <p class=" app-text-body-m text-app-darkElectricBlue">Better understand your weight in relation
                    to your height using our
                    body mass index (BM) calculator. While
                    BMI
                    is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your
                    overall health and well-being.</p>
            </div>
            <div class="app-desktop:col-span-6 app-desktop:col-end-13">
                <bmi-calculator />
            </div>
        </div>
</template>
<script lang="ts" setup>
import bmiCalculator from './bmi-calculator.vue';
</script>

