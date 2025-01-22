<template>
    <div class="fixed inset-0 z-10
    h-[--mobile-header-height] app-tablet:h-[--tablet-header-height] app-desktop:h-[--desktop-header-height]
    "
    :class="{'header-bg-color-scroll-y':scrollY>5}"
    >
        <header class="h-full flex justify-center items-center app-desktop:justify-start app-desktop:app-grid-container">
            <div v-html="logoSvg" class="logo-svg"></div>
        </header>
    </div>
</template>

<script lang="ts" setup>
import {ref , onMounted , onUnmounted} from 'vue'
import logoSvg from '/src/assets/images/logo.svg?raw'
const scrollY=ref(0)
const scrollYHandler=()=>{
    scrollY.value=window.scrollY
}
onMounted(()=>{
    window.addEventListener('scroll',scrollYHandler)
})
onUnmounted(()=>{
    window.removeEventListener('scroll',scrollYHandler)
})

</script>

<style lang="scss" scoped>
.logo-svg {
    @apply *:h-[40px] *:app-desktop:h-[60px]
    
}
.header-bg-color-scroll-y{
    background-color: #f3fcffcc;
}
</style>