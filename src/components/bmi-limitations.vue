<template>

    <div class="p-6 flex flex-col gap-6 app-tablet:flex-row app-tablet:flex-wrap app-tablet:content-center">
        <div class="flex flex-col gap-8">
            <div class="app-text-heading-32 text-app-gunmetal app-tablet:text-center">Limitations of BMI</div>
            <div class="app-text-body-m text-app-darkElectricBlue app-tablet:text-center">Although BMI is often a
                practical indicator of healthy weight, it is not suited for every person. Specific groups should
                carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to
                use.</div>
        </div>
        <div v-for="(limitation, index) in limitations" :key="index"
            class="flex flex-col gap-4 items-start rounded-lg p-4 shadow-xl app-tablet:max-w-[calc(50%-0.75rem)] app-tablet:w-full app-tablet:mx-auto">
            <div class="flex gap-4 items-center">
                <img :src="limitation.icon" :alt="limitation.title" class="h-[32px]" />
                <div class="app-text-heading-s text-app-gunmetal">{{ limitation.title }}</div>
            </div>
            <div class="app-text-body-m text-app-darkElectricBlue">{{ limitation.desc }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const limitations = [
    {
        title: "Gender",
        icon: "icon-gender.svg",
        desc: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
    },
    {
        title: "Age",
        icon: "icon-age.svg",
        desc: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
        title: "Muscle",
        icon: "icon-muscle.svg",
        desc: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
        title: "Pregnancy",
        icon: "icon-pregnancy.svg",
        desc: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
        title: "Race",
        icon: "icon-race.svg",
        desc: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
    }
].map(item => {
    return {
        ...item,
        icon: new URL(`/src/assets/images/${item.icon}`, import.meta.url).href
    }
})

</script>