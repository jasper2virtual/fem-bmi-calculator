<template>

<div class="flex flex-col gap-6 p-6 app-desktop:px-0 app-desktop:app-grid-container">
    <div v-for="(item,index) in suggestions" :key="index" class="flex flex-col gap-4 items-start app-tablet:flex-row app-tablet:items-center
    app-desktop:col-span-4 app-desktop:flex-col app-desktop:items-start
    ">
        <img :src="item.icon" class="h-[64px]" />
        <div class="flex flex-col gap-4">
            <div class="app-text-heading-m text-app-gunmetal">{{item.title}}</div>
            <div class="app-text-body-m text-app-darkElectricBlue">{{item.desc}}</div>
        </div>
    </div>
</div>

</template>
<script lang="ts" setup>

const suggestions = 
 [
    {
        icon:'icon-eating.svg',
        title: "Healthy eating",
        desc: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
    },
    {
        icon:'icon-exercise.svg',
        title: "Regular exercise",
        desc: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
    },
    {
        icon:'icon-sleep.svg',
        title: "Adequate sleep",
        desc: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
    }
].map(item => {
    return {
        ...item,
        icon: new URL(`/src/assets/images/${item.icon}`, import.meta.url).href
    }
})



</script>